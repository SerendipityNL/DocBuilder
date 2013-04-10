var provider = require('../models/provider'),
load = new provider.getModel(),
User = new load.model('user'),
url = require('url'),
gravatar = require('gravatar');


// strips part of url and puts in var
function getLastUrlPart(req){
	var urlParts = url.parse(req, true),
		completeUrl = urlParts['href'].split('/'),
		getLastPart = completeUrl.pop();
		
	return getLastPart;
}

// shows users
exports.index = function(req, res) {
	
	User.findAll( function(err, users) {
		res.render('users/index', {
			page_title: 'Manage users',
			users:		users
		});
	});
}

// deletes user
exports.delete = function(req, res) {

	var username = getLastUrlPart(req.url);

	User.deleteByUsername(username, function (err) {
		if ( ! err){
			res.redirect('/users/index');
		}
	});
}

// adds new user
exports.test = function(req, res) {
	res.render('users/test', {
		page_title: 'test'
	});
}

// adds new user
exports.new = function(req, res) {
	res.render('users/new', {
		page_title: 'New user'
	});
}

// edits user
exports.edit = function(req, res) {
	var username = getLastUrlPart(req.url);
	
	User.findByUsername(username, function (user) {
		res.render('users/edit', {
			page_title: 'Edit user',
			user: user
		});
	});
}

// creating a user
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

// makes dashboard
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

// activates user with link send in registration e-mail
exports.activate = function (req, res) {
	
	var token = getLastUrlPart(req.url);
	
	User.activate(token, function (callback) {

		if(callback == true){
			console.log(succes);
		}

		else{
			res.render('users/error', {
	 			page_title: 'Error',
	 			errors: callback
	 		});
		}

	});
}

// makes dashboard
exports.reset = function (req, res) {		
	res.render('users/reset', {
		page_title: 'Reset password'
	});
}

exports.forgotPassword = function (req, res){

	console.log(req.email);

	User.resetPassword(req.email, function(err){
			if ( ! err) {
				res.redirect('/users/index');
			}
			else {
				console.log(err);
				// res.render('users/edit', {
		 	// 		page_title: 'Edit user',
		 	// 		errors: err
		 	// 	});
			}
		});
}

// updates user
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