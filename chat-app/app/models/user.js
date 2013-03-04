var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blocknodes');

var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var user = new Schema({
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

exports.model_functions = model_functions;
