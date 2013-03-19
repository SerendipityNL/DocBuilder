// Initiate the get_model function
getModel = function(){};

// Extend the get_model function for each model
getModel.prototype.model = function(model){
	var modelFile = require('./'+model);
	var model = new modelFile.modelFunctions();
	return model;
}

exports.getModel = getModel;
