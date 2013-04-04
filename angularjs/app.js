// Include the required modules
var express = require('express'),
	app = express();

// Configure the application
app.configure(function() {

	// Enable the bodyParser so we can access POST data
	app.use(express.bodyParser());
	
	// Enable the cookieParser so we can work with cookies
	app.use(express.cookieParser('super-duper-secret'));

	// add req.session cookie support
	app.use(express.cookieSession());

	// Set the path to the public directory
	app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res) {
	res.render('index.ejs', {
		pageTitle: 'Angular test'
	});
});

// Let the app listen op port 1337
app.listen(1337);

// Set the console message
console.log('Application accessible at http://localhost:1337');