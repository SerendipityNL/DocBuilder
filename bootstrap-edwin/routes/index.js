exports.index = function(req, res){
	var items = {
		'aaa': 'Tjerk',
		'bbb': 'Georgia',
		'ccc': 'Arial',
		'ddd': 'Bebas Regular',
		'eee': 'Vincent'
	}
	res.render('index.jade', {
		'pageTitle': 'Bootstrap CSS Edwin',
		'items': items
	});
};
