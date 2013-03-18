var mongoose = require('mongoose');

exports.index = function(req, res) {
	res.render('main/index', {
		page_title: 'Welcome!'
	});
}

exports.test = function(req, res) {
	res.send('it works!');
}