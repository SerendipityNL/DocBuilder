// Initiate the get_model function
get_model = function(){};

// Extend the get_model function for each model
get_model.prototype.model = function(model){
	var model_file = require('./'+model);
	var model = new model_file.model_functions();
	return model;
}

exports.get_model = get_model;
