var path = '../app/controllers';

module.exports = function (app) {

	var main     = require(path + '/main'),
		users    = require(path + '/users'),
		sessions = require(path + '/sessions');
		
	app.get('/', main.index);
	app.get('/test', main.test);

	app.get('/users/new', users.new);
	app.get('/users/edit/*', users.edit);
	app.get('/users/delete/*', users.delete);
	app.get('/users/*', users.index);
		
	app.post('/users/new', users.saveNew);
	app.post('/sessions/new', sessions.auth);

	app.listen(1337);
}