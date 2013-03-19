var provider = require('../models/provider'),
load = new provider.getModel(),
User = new load.model('user');

exports.index = function(req, res) {
	User.findAll( function(err, users) {
		res.render('users/index', {
			page_title: 'Users/index!',
			users:		users
		});
	});
	
}

exports.delete = function(req, res) {
	var url = require('url'),
		urlParts = url.parse(req.url, true),
		completeUrl = urlParts['href'].split('/'),
		username = completeUrl.pop();

	User.deleteByUsername(username, function (err) {
		if ( ! err){
			res.redirect('/users/index');
		}
	});
}

exports.new = function(req, res) {
	res.render('users/new', {
		page_title: 'new!'
	});
}

exports.edit = function(req, res) {
	res.render('users/new', {
		page_title: 'edit!'
	});
}

exports.saveNew = function(req, res) {

	console.log(req.body);

	User.save(req.body, function(err){
		if ( ! err) {
			res.redirect('/users/index');
		}
		else {
			res.render('users/new', {
	 			page_title: 'new!',
	 			errors: err
	 		});
		}
	});
}