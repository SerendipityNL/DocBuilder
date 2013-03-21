// Set the path to the controllers
var path = '../app/controllers';

// Include the required controllers
var	main     = require(path + '/main'),
	users    = require(path + '/users'),
	sessions = require(path + '/sessions');

module.exports = function (app) {
	// Session GET routes
	//app.get('/login', sessions.index);

	    	app.get('/login', sessions.index);
			app.post('/login', sessions.login);
	// app.all('*', sessions.checkAuth, function(req, res, next) {
	// 	next();
	// });

	app.all('*',function(req,res,next){

		if(res.cookie.username){
	    	req.session.logged_in = true;
	    	next();
	    }
	    if(req.session.logged_in){
	        next();
	    }
	    else{
	    	res.redirect('/login');
	    }
	});


	// Route to the homepage and the test page
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