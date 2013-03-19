var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/user-test');

// Validation
var Validator = require('validator').Validator;

var userSchema = new mongoose.Schema({
	email		: String,
	first		: String,
	last		: String,
	displayName : String
});

userSchema.plugin(require('basic-auth-mongoose'));
var User = mongoose.model('User', userSchema);

modelFunctions = function(){};

modelFunctions.prototype.save = function(params, callback){

	var displayName = params['username'];
	var username = params['username'].toLowerCase();
	
	//Validate
	Validator.prototype.error = function (msg) {
	    this._errors.push(msg);
	    return this;
	}

	Validator.prototype.getErrors = function () {
	    return this._errors;
	}

	var validator = new Validator();

	validator.check(params['email']).notEmpty(); 
	validator.check(params['first']).notEmpty(); 
	validator.check(params['last']).notEmpty();

	validator.check(params['password']).equals(params['confirmPassword']);
	validator.check(params['email']).len(6, 64).isEmail(); 

	var errors = validator.getErrors();

	var user = new User({
		email: params['email'], 
		first: params['first'], 
		last: params['last'], 
		username: username,
		displayName: displayName, 
		password: params['password']
	});
	
	if(!errors){
		user.save(function (err) {
			callback();
			return true;
		});
	}
	else{
		callback(errors);
		return false;
	}
};

modelFunctions.prototype.test = function(username, password){
	username = username.toLowerCase()
	User.findOne({'username' : username}, function(err, user){
		if (!err){
			console.log(user.authenticate(password));
		}
	});
};

exports.modelFunctions = modelFunctions;