var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blocknodes');

var schema = mongoose.Schema
  , objectId = schema.ObjectId;

var user = new schema({
	id		 :		Number,
	name	 :		String,
	email	 :		String,
	password :      String,
});

mongoose.model('user', user);
var user = mongoose.model('user');

modelFunctions = function(){};

modelFunctions.prototype.findAll = function(callback) {
	user.find({}, function (err, users) {
		callback( null, users);
	});
};

exports.modelFunctions = modelFunctions;