exports.edit = function(req, res) {
	res.render('document/edit', {
		'documentId': req.params.id,
		'pageTitle': 'Document ' + req.params.id + ' wijzigen'
	});
};

exports.upload = function(req, res) {
	res.render('document/upload', {
		'pageTitle': 'upload'
	});
};

exports.imageHandler = function(req, res) {
	res.render('document/imageHandler', {
		'pageTitle': 'image'
	});
};
