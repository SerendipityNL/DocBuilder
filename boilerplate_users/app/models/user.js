var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/user-test');

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
	var user = new User({
		email: params['email'], 
		first: params['first'], 
		last: params['last'], 
		username: username,
		displayName: displayName, 
		password: params['password']
	});
	
	user.save(function (err) {
		callback();
	});
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