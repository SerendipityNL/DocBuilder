exports.index = function(req, res){
	res.render('blocks.jade');
};

exports.print = function(req, res) {
	res.render('print.jade')
}