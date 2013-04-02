var provider = require('../models/provider'),
load = new provider.getModel();
/*User = new load.model('user');*/


exports.index = function(req, res) {
	res.render('compose/index', {
		
	});
}
