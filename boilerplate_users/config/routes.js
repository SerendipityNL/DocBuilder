// Set the path to the controllers
var path = '../app/controllers';

// Include the required controllers
var	main     = require(path + '/main'),
	users    = require(path + '/users'),
	sessions = require(path + '/sessions')
	compose = require(path + '/compose');

module.exports = function (app) {

	app.get('/login', sessions.index);
	app.post('/login', sessions.login);
	
	app.get('/users/activate/*', users.activate);
	app.get('/users/error/');

	app.get('/forgot-password', users.reset);
	app.post('/forgot-password', users.forgotPassword);

	// Just for testing purposes
	app.get('/register', users.new);
	app.post('/register', users.create);
	
	// check login for each page
	app.all('*', function(req,res,next) {
		if (req.session.logged_in) {
			global.session = req.session;
		    next();
		}
		else {
			res.redirect('/login');
		}
	});

	// Route to the homepage and the test page
	app.get('/logout', sessions.logout);

	app.get('/', main.index);
	app.get('/test', main.test);

	// User GET routes
	app.get('/users/new', users.new);
	app.get('/users/edit/*', users.edit);
	app.get('/users/delete/*', users.delete);
	app.get('/users/*', users.index);
	
	app.get('/dashboard', users.dashboard);
	
	// User POST routes
	app.post('/users/new', users.create);
	app.post('/users/edit/*', users.update);

	// Compose GET routes
	app.get('/compose', compose.index);
}