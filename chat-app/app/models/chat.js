var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blocknodes');

var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var Chat = new Schema({
	name	:		String,
	message	:		String
});

mongoose.model('Chat', Chat);
var Chat = mongoose.model('Chat');

model_functions = function(){};

model_functions.prototype.find_all = function(callback) {
  Chat.find({}, function (err, chats) {
    callback( null, chats )
  });  
};

model_functions.prototype.save = function(params, callback) {
  var chat = new Chat({name: params['name'], message: params['message']});
  chat.save(function (err) {
    callback();
  });
};

exports.model_functions = model_functions;
