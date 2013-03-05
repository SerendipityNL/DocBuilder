var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

// Let the server listen on port 1337
server.listen(1337);

// Start working with cookies
app.use(express.cookieParser());

// Set the view engine and the path to the views
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Set the path to the public directory
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {

	res.cookie('nickname', 'Vincent');
	//res.clearCookie('nickname');

	if (typeof req.cookies.nickname === 'undefined') {
		var setcookie = true;
	}
	else {
		var setcookie = false;
	}

	res.clearCookie('nickname');
	
	
	res.render('index', {
		setcookie: setcookie
	});
});

var clients = {};

io.sockets.on('connection', function(socket) {



	clients[socket.id] = socket;

	// A user has clicked on the link
	socket.on('msg', function(data) {
		// Send back a message
		io.sockets.emit('new_msg', { msg: data.msg });
	});
});

console.log('Application accessible at http://localhost:1337');