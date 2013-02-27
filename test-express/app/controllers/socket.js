//io = require('socket.io').listen(app);

exports.index = function(req, res) {
	res.render('socket/index', {
		page_title: "Websocket index",
	});
};