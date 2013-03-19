// Include the requested files
var express = require('express'),
	stylus = require('stylus'),
	weblog = require('./app/controllers/weblog'),
	socket = require('./app/controllers/socket'),
	provider = require('./app/models/provider'),
	load = new provider.getMaodel();

var user = new load.model('user');
user.findAll(function(err, users){
	console.log(users);
});
// Create a new object of the Express framework
var app = express();

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

// Set the weblog routes
app.get('/', weblog.index);
app.get('/weblog', weblog.index);
app.get('/weblog/view/:id', weblog.view);

// Set the socket routes
app.get('/socket', socket.index);

// Let the app listen on 1337
app.listen(1337);
console.log('Application accessible at http://localhost:1337');