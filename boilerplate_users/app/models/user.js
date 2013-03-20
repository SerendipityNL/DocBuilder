var mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/user-test')
	Validator = require('validator').Validator;

var userSchema = new mongoose.Schema({
	email		: String,
	first		: String,
	last		: String,
	displayName : String
});

userSchema.plugin(require('basic-auth-mongoose'));
var User = mongoose.model('User', userSchema);

modelFunctions = function(){};

modelFunctions.prototype.findAll = function(callback) {
	User.find(function(err, users) {
		if ( ! err) {
			callback(null, users);
		}
	}).sort({'username' : '-1'});
};

modelFunctions.prototype.findByUsername = function(username, callback) {
	User.find({'username' : username}, function (err, user) {
		if (! err){
			callback(null, user);
		}
	});
}

modelFunctions.prototype.deleteByUsername = function(username, callback) {
	User.find({'username' : username}, function (err, user){
		if ( ! err ){
			User.remove({'username' : username}, function(err){
				if ( ! err) {
					callback();
				}
				else {
					callback(err);
				}
			});
		}
		else {
			callback(err);
		}
	});
}

modelFunctions.prototype.save = function(params, callback) {
	
	//Validate
	Validator.prototype.error = function (msg) {
	    this._errors.push(msg);
	    return this;
	}

	Validator.prototype.getErrors = function () {
	    return this._errors;
	}

	var validator = new Validator();

	validator.check(params.email).notEmpty(); 
	validator.check(params.first).notEmpty(); 
	validator.check(params.last).notEmpty();

	validator.check(params.password).equals(params.confirmPassword);
	validator.check(params.email).len(6, 64).isEmail(); 

	var errors = validator.getErrors();

	var user = new User({
		email: params['email'], 
		first: params['first'], 
		last: params['last'], 
		username: params['username'], 
		password: params['password']
	});
	
	if( ! errors) {
		user.save(function (err) {
			callback(null);
		});
	}
	else {
		callback(errors);
		return false;
	}
};

modelFunctions.prototype.test = function(username, password) {
	username = username.toLowerCase();
	User.findOne({'username' : { $regex : new RegExp(username, "i") }}, function(err, user) {
		if (!err) {
			console.log(user.authenticate(password));
		}
	});
};

modelFunctions.prototype.auth = function(req) {
	User.findOne({'email' : req.email}, function(err, user) {
		if (!err) {
			console.log(user);
			user.authenticate(req.password);
		}
		else{
			console.log('not valid');
		}
	});
};

exports.modelFunctions = modelFunctions;