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

	var params = {
		email:		req.param('email'),
		first:		req.param('first'),
		last:		req.param('last'),
		username:	req.param('username'),
		password:	req.param('password')
	};


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
	
	// console.log(req.body);
	// var Validator = require('validator').Validator;

	// //Validate
	// Validator.prototype.error = function (msg) {
	//     this._errors.push(msg);
	//     return this;
	// }

	// Validator.prototype.getErrors = function () {
	//     return this._errors;
	// }

	// var validator = new Validator();

	// validator.check(req.param('email')).notEmpty(); 
	// validator.check(req.param('first')).notEmpty(); 
	// validator.check(req.param('last')).notEmpty();

	// validator.check(req.param('password')).equals(req.param('confirmPassword'));
	// validator.check(req.param('email')).len(6, 64).isEmail(); 

	// var errors = validator.getErrors();

	// console.log(errors);

	// var params = {
	// 	email:		req.param('email'),
	// 	first:		req.param('first'),
	// 	last:		req.param('last'),
	// 	username:	req.param('username'),
	// 	password:	req.param('password')
	// };

	// if(!errors){
	// 	User.save(params, function(err){
	// 		if (!err) {
	// 			res.redirect('/users/index');
	// 		}
	// 	});
	// }
	// else {
	// 	res.render('users/new', {
	// 		page_title: 'new!',
	// 		errors: errors
	// 	});
	// }

}