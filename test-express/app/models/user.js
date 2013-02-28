var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blocknodes');

var schema = mongoose.Schema
  , object_id = schema.ObjectId;

var user = new schema({
	id		:		Number,
	name	:		String,
	email	:		String
});

mongoose.model('user', user);
var user = mongoose.model('user');

model_functions = function(){};

model_functions.prototype.find_all = function(callback) {
	user.find({}, function (err, users) {
		callback( null, users);
	});
};

exports.methods = model_functions;