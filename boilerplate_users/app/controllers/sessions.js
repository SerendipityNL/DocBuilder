var provider = require('../models/provider'),
load = new provider.getModel(),
User = new load.model('user');


exports.index = function(req, res) {
	res.render('sessions/index', {
		page_title: 'Login'
	});
}


exports.auth = function(req, res) {

	User.auth(req.body, function(err){
		if ( ! err) {
			res.redirect('/users/new');
		}
		else {
			res.render('sessions/new', {
	 			page_title: 'Login',
	 			errors: err
	 		});
		}
	});

}