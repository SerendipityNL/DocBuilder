exports.view = function(fileEngine, file){
	fileEngine.render(__dirname+'/app/views/'+file+'.ejs');
	console.log(__dirname+'/app/views/'+file+'.ejs');
}