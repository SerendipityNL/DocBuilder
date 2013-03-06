var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	cons = require('consolidate'),
	swig = require('swig');

// Let the server listen on port 1337
server.listen(1337);

// Set the view engine to Swig
app.engine('.tpl', cons.swig);

// Let the view engine handle tpl files
app.set('view engine', 'tpl');

// Set the path to the views directory
app.set('views', __dirname + '/views');

// Configure Swig
swig.init({
	root: __dirname + '/views',
	cache: false,
	allowErrors: true
});

// Set the path to the public directory
app.use(express.static(__dirname + '/public'));

// Enable the cookieParser so we can work with cookies
app.use(express.cookieParser());

app.get('/', function(req, res) {
	if (typeof req.cookies.nickname === 'undefined') {
		var nickname = false;
	}
	else {
		var nickname = req.cookies.nickname;
	}

	res.cookie('nickname', 'Vincent');
	//res.clearCookie('nickname');
	
	res.render('index', {
		nickname: nickname
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