exports.index = function(req, res) {
	res.render('weblog/index', {
		page_title: "Weblog"
	});
};

exports.view = function(req, res) {
	var id = req.params.id;
	res.render('weblog/view', {
		page_title: "Weblog view",
		weblog_id: id
	});
	res.send('Requested weblog #' + id);
};