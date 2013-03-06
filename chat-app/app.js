// Include the requested files
var express = require('express'),
	app = express()
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);
	stylus = require('stylus'),
	chat = require('./app/controllers/chat'),
	provider = require('./app/models/provider'),
	load = new provider.get_model();

var chat = new load.model('chat');

server.listen(1337);

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');

// Make use of the sylus middleware
app.use(stylus.middleware({
	src: __dirname + '/app/views',
	dest: __dirname + '/public',
	compress: true
}));

// Set the path to the public directory
app.use(express.static(__dirname + '/public'));
app.get('/history.json', function(req, res){
	chat.find_all(function (err, chats) {
		res.send(chats);
	});
});
app.get('/*', function(req, res) {
	res.render('index', {});
	res.writeHead(200, {
		'Set-Cookie': 'username=Serendipity',
		'Content-Type': 'text/plain'
	});
});

var clients = {};

io.sockets.on('connection', function(socket) {

	clients[socket.id] = socket;

	// A user has clicked on the link
	socket.on('msg', function(data) {
		// Send back a message
		chat.save({
			name: data.name,
			message: data.msg,
			channel: data.channel
			}, function(error, docs) {
				console.log('message saved')
		});
		io.sockets.emit('new_msg', { msg: data.msg, name: data.name, channel: data.channel });
	});
});


