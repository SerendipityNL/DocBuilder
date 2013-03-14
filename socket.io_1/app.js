var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	cons = require('consolidate'),
	swig = require('swig');

// Loading the models	
var chatModel = require('./models/chat');

// Let the server listen on port 1337
server.listen(1337);

app.configure(function() {
	// Enable the bodyParser so we can access POST data
	app.use(express.bodyParser());
	
	// Enable the cookieParser so we can work with cookies
	app.use(express.cookieParser());

	// Set the view engine to Swig
	app.engine('.tpl', cons.swig);

	// Let the view engine handle tpl files
	app.set('view engine', 'tpl');

	// Set the path to the views directory
	app.set('views', __dirname + '/views');

	// Set the path to the public directory
	app.use(express.static(__dirname + '/public'));
});

// Configure Swig
swig.init({
	root: __dirname + '/views',
	cache: false,
	allowErrors: true
});

app.get('/', function(req, res) {
	var nickname = null;

	if (typeof req.cookies.nickname !== 'undefined') {
		nickname = req.cookies.nickname;
	}
	res.render('index', {
		nickname: nickname,
	});
	
	//res.clearCookie('nickname');
});

app.post('/', function(req, res) {
	var nickname = req.param('nickname');
	res.cookie('nickname', nickname, {maxAge: 900000});
	res.redirect('/');
});

app.get('/messages.json', function(req, res) {
	var data = [];

	chatModel.getLatest(function(data) {
		res.json(data);
	});
});

var clients = {};

io.sockets.on('connection', function(socket) {
		
	// Add the client to the list of clients
	clients[socket.id] = socket;

	// A user has clicked on the link
	socket.on('msg', function(data) {
		// Send back a message
		io.sockets.emit('new_msg', { message: data.message, nickname: data.nickname });


		chatModel.insertMessage(data.nickname, data.message);

		// Save in the model?
	});
});

console.log('Application accessible at http://localhost:1337');