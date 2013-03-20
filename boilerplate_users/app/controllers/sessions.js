var provider = require('../models/provider'),
load = new provider.getModel(),
User = new load.model('user');


exports.index = function(req, res) {
	res.render('sessions/index', {
		page_title: 'Login'
	});
}


exports.checkAuth = function(req, res, next) {
	if ( ! req.session.logged_in) {
		next();
		/*
		req.session.logged_in = false;
		res.render('sessions/', {
			page_title: 'Login',
			error: error
		});
		*/
	} 
	else {
		res.redirect('/login');
	}
}

exports.login = function(req, res) {

	User.auth(req.body, function(error, username){
		if (!error) {
			  req.session.logged_in = true;
			  req.session.username  = username;

				res.render('users/', {
		 			page_title: 'home',
		 			sessions : req.session
		 		});

			  //res.redirect('/users');
		}
		else {
			req.session.logged_in = false;
			res.render('sessions/', {
	 			page_title: 'Login',
	 			error: error
	 		});
		}
	});

}