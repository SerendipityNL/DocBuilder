var mongoose = require('mongoose');
mongoose.connect('localhost', 'test');

var schema = mongoose.Schema({
	nickname: 'string',
	message: 'string',
	date: { type: Date, default: Date.now }
});

var chat = mongoose.model('chat', schema)

insertMessage = function(nickname, message) {	
	chat.create({nickname: nickname, message: message}, function (err) {
		if (err) return handeError(err);
	});
}

getLatest = function(callback) {
	chat.find(function(err, data) {
		callback(data);
	}).sort({date: -1}).limit(10);
}

exports.insertMessage = insertMessage;
exports.getLatest = getLatest;

/*
var schema = mongoose.Schema({ name: 'string' });
var Cat = mongoose.model('Cat', schema);

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) // ...
  console.log('meow');
});
*/
