getModel = function(){};

getModel.prototype.model = function(model) {
	var modelFile = require('./'+model);
	var model = new modelFile.modelFunctions();
	return model;
}

exports.getModel = getModel;