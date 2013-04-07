exports.index = function(req, res){
	res.render('index.jade', {
		pageTitle: 'Angular test'
	});
};

exports.test1 = function(req, res){
	res.render('test1.jade', {
		pageTitle: 'Angular test 1'
	});
};

exports.test2 = function(req, res){
	var users = [
		{name: 'Lorem'},
		{name: 'Ipsum'},
		{name: 'Dolar'},
		{name: 'Sit'}
	];
	res.render('test2.jade', {
		pageTitle: 'Angular test 2',
		users: users
	});
};