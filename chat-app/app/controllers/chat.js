//io = require('socket.io').listen(app);

exports.index = function(req, res) {
	res.render('chat/index', {
		page_title: "Chat index",
	});
};