var provider = require('../models/provider'),
load = new provider.getModel(),
User = new load.model('user'),
url = require('url'),
gravatar = require('gravatar');

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


	// var username = "Henkiebob";
	// var email    = "tjerk.dijkstra@gmail.com";

	// User.sendEmail(username, function (err) {
	// 	if(err){
	// 		console.log(err);
	// 	}
	// });

}

exports.delete = function(req, res) {

	var username = getLastUrlPart(req.url);

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
	
	User.findByUsername(username, function (user) {
		res.render('users/edit', {
			page_title: 'Edit user',
			user: user
		});
	});
}

exports.create = function(req, res) {

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

exports.dashboard = function (req, res) {
	
	User.findByUsername(session.username, function (user) {
		var avatarUrl = gravatar.url(user.email, {s: '230', r: 'x', d: '404'});
		
		res.render('users/dashboard', {
			page_title: 'Documents',
			user: user,
			avatarUrl: avatarUrl
		});
	});
}

exports.activate = function (req, res) {
	
	var token = getLastUrlPart(req.url);
	
	User.activate(token, function (callback) {
			console.log(callback);
	});
}

exports.update = function (req, res) {
	var username = getLastUrlPart(req.url);
	
	User.update(username, req.body, function(err){
		if ( ! err) {
			res.redirect('/users/index');
		}
		else {
			res.render('users/edit', {
	 			page_title: 'Edit user',
	 			errors: err
	 		});
		}
	});
}