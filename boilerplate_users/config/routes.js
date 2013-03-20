// Set the path to the controllers
var path = '../app/controllers';

// Include the required controllers
var	main     = require(path + '/main'),
	users    = require(path + '/users'),
	sessions = require(path + '/sessions');

module.exports = function (app) {

	// Session GET routes
	app.get('/login', sessions.index);

	// Session POST routes
	app.post('/login', sessions.login);

	app.all('*', sessions.checkAuth, function(req, res, next) {
		next();
	});

	app.get('/', main.index);
	app.get('/test', main.test);

	// User GET routes
	app.get('/users/new', users.new);
	app.get('/users/edit/*', users.edit);
	app.get('/users/delete/*', users.delete);
	app.get('/users/*', users.index);

	// User POST routes
	app.post('/users/new', users.create);
	app.post('/users/edit/*', users.update);
}