var provider = require('../models/provider'),
load = new provider.getModel(),
User = new load.model('user');

exports.index = function(req, res) {
	res.render('users/index', {
		page_title: 'Users/index!'
	});
}

exports.new = function(req, res) {
	res.render('users/new', {
		page_title: 'new!'
	});}

exports.edit = function(req, res) {
	res.render('users/new', {
		page_title: 'edit!'
	});
}

exports.saveNew = function(req, res) {
	console.log(req.body);
	var params = {
		email:		req.param('email'),
		first:		req.param('first'),
		last:		req.param('last'),
		username:	req.param('username'),
		password:	req.param('password')
	};
	
	User.save(params, function(err){
		if (!err) {
			res.redirect('/users/index');
		}
	});
}