// Include the required modules
var express = require('express'),
	app = express(),
	todos = require('./routes/todos');

// Configure the application
app.configure(function() {

	// Enable the bodyParser so we can access POST data
	app.use(express.bodyParser());
	
	// Enable the cookieParser so we can work with cookies
	app.use(express.cookieParser('super-duper-secret'));

	// add req.session cookie support
	app.use(express.cookieSession());

	// Enable the logging
	app.use(express.logger('dev'));

	// Set the path to the public directory
	app.use(express.static(__dirname + '/public'));

	// Set the views directory
	app.set('views', __dirname + '/views');

	// Set the view engine
	app.set('view engine', 'jade');
});

// Todo index page
app.get('/', todos.index);

// Api calls
app.get('/todos/find_all', todos.findAll);
app.get('/todos/find/:id', todos.findOne);

// Todo partions, MUST be below other todo routes
app.get('/todos/:partial', todos.partial);

// Let the app listen op port 1337
app.listen(1337);

// Set the console message
console.log('Application accessible at http://localhost:1337');