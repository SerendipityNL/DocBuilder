var provider = require('../models/provider'),
load = new provider.getModel(),
User = new load.model('user'),
url = require('url');

function getLastUrlPart(req){
	var urlParts = url.parse(req, true),
		completeUrl = urlParts['href'].split('/'),
		getLastPart = completeUrl.pop();
		
	return getLastPart;
}

exports.index = function(req, res) {
	User.findAll( function(err, users) {
		res.render('users/index', {
			page_title: 'Manage users',
			users:		users
		});
	});
	
}

exports.delete = function(req, res) {

	var username = getlastUrlPart(req.url);

	User.deleteByUsername(username, function (err) {
		if ( ! err){
			res.redirect('/users/index');
		}
	});
}

exports.new = function(req, res) {
	res.render('users/new', {
		page_title: 'New user'
	});
}

exports.edit = function(req, res) {
	var username = getLastUrlPart(req.url);
	
	User.findByUsername(username, function (err, user) {
		if ( ! err){
			res.render('users/edit', {
				page_title: 'Edit user',
				user: user
			});
		}		
	});
}

exports.saveNew = function(req, res) {

	User.save(req.body, function(err){
		if ( ! err) {
			res.redirect('/users/index');
		}
		else {
			res.render('users/new', {
	 			page_title: 'New user',
	 			errors: err
	 		});
		}
	});
}