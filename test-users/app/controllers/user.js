//io = require('socket.io').listen(app);

exports.index = function(req, res) {
	res.render('sessions/new', {
		page_title: "New User",
	});
};