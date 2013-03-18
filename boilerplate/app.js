var express = require('express'),
	app = express()
	cons = require('consolidate'),
	swig = require('swig');

// Configure the application
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
	app.set('views', __dirname + '/app/views');

	// Set the path to the public directory
	app.use(express.static(__dirname + '/public'));
});

// Configure Swig
swig.init({
	root: __dirname + '/app/views',
	cache: false,
	allowErrors: true
});

require('./config/routes')(app);

// Let the app listen op port 1337
app.listen(1337);

// Set the console message
console.log('Application accessible at http://localhost:1337');