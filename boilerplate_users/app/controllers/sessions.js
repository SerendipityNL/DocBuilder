var provider = require('../models/provider'),
load = new provider.getModel(),
User = new load.model('user');


exports.index = function(req, res) {
	res.render('sessions/index', {
		page_title: 'Login'
	});
}


// exports.checkAuth = function(req, res, next) {
// 	if ( ! req.session.logged_in) {
		
// 	} 
// 	else {
// 		res.redirect('/login');
// 	}
// }


exports.logout = function(req, res) {
	delete req.session.logged_in;
	delete req.session.username;

	res.redirect('/login');
}

exports.login = function(req, res) {

	User.auth(req.body, function(error, username){
		if (!error) {
			req.session.logged_in = true;
			req.session.username  = username;
			User.isAdmin(username, function(err, isAdmin) {
				if (!err) {
					req.session.isAdmin = isAdmin;
				}
				res.cookie('username', username, { maxAge: 900000, httpOnly: false});
			
				res.redirect('/users/');
			});
			
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