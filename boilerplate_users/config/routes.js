var path = '../app/controllers';

module.exports = function (app) {

	var main = require(path + '/main.js'),
		users = require(path + '/users.js');
		
	app.get('/', main.index);
	app.get('/test', main.test);

	app.get('/users/new', users.new);
	app.get('/users/edit', users.edit);
	app.get('/users/delete/*', users.delete);
	app.get('/users/*', users.index);
		
	app.post('/users/new', users.saveNew);

	app.listen(1337);
}