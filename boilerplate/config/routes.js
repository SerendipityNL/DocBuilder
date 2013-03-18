var path = '../app/controllers';

module.exports = function (app) {

	var main = require(path + '/main.js');
	app.get('/', main.index);
	app.get('/test', main.test);


	/*
	var users = require(path + '/users.js');
	app.get('/users', users.index);
	app.get('/users/new', users.new);
	app.get('/users/edit', users.edit);
	*/

}