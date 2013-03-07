// Load the database module and connect to the database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blocknodes');

// Define a new schema for the user database
var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var user = new Schema({
	id		:		Number,
	name	:		String,
	email	:		String
});

// Convert the schema to a working mongoose model
mongoose.model('user', user);
var user = mongoose.model('user');

// Define the model_functions model and leave it empty
model_functions = function(){};

/* 
 * 		Extending models
 * 		In the next part of this model the model functions are defined. This is done by extending the model_functions function.
*/

// Find all users
model_functions.prototype.find_all = function(callback) {
	user.find({}, function (err, users) {
		callback( null, users);
	});
};


// Find user by ID
model_functions.prototype.find_by_id = function(id, callback) {
  user.findById(user, function (err, user) {
    if (!err) {
	  callback(null, user);
	}
  });
};

// Update user by ID
model_functions.prototype.update_by_id = function(id, values, callback) {
  user.findById(id, function (err, user) {
    if (!err) {
	  user.name = values.name;
	  user.email = values.email;
	  user.save(function (err) {
	    callback();
	  });
	}
  });
};

// Create a new user
model_functions.prototype.save = function(params, callback) {
  var user = new Post({id: params['id'], name: params['name'], email: params['email']});
  user.save(function (err) {
    callback();
  });
};

// Delete user by ID
model_functions.prototype.delete_by_id = function(id, callback) {
	user.findById(id, function (err, user) {
		if (!err) {
			user.remove(function (err) {
				callback();
			});
		}
	});
}

exports.model_functions = model_functions;
