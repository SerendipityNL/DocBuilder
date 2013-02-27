exports.index = function(req, res) {
	var users = [
		{
			name: "Vincent",
			age: 24
		},
		{
			name: "Douwe",
			age: 22
		},
		{
			name: "Edwin",
			age: 22
		}
	];

	res.render('weblog/index', {
		page_title: "Weblog index",
		users: users
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