var provider = require('../models/provider'),
load = new provider.getModel(),
User = new load.model('user');


exports.index = function(req, res) {
	res.render('users/index', {
		page_title: 'Users/index!'
	});
}


exports.auth = function(req, res) {

	User.auth(req.body, function(err){
		if ( ! err) {
			res.redirect('/users/new');
		}
		else {
			res.render('users/new', {
	 			page_title: 'new!',
	 			errors: err
	 		});
		}
	});

}