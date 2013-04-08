exports.index = function(req, res){
	res.render('todos/index.jade', {
		pageTitle: 'Todo\'s',
	});
};

exports.listJSON = function(req, res) {
	var data = [
		{
			name: 'Vincent Bremer',
			title: 'Building Angular todo list'
		},
		{
			name: 'Douwe de Haan',
			title: 'Setup Doctopus repository'
		},
		{
			name: 'Tjerk Dijkstra',
			title: "Following REST tutorials"
		},
		{
			name: 'Edwin ten Wolde',
			title: "Creating the bootstrap CSS"
		}
	];
	res.send(data);
}

exports.create = function(req, res) {

}

exports.update = function(req, res) {

}

exports.delete = function(req, res) {
	res.render('todos/partials/delete.jade');
}

exports.partials = function(req, res) {
	var partial = req.params.partial;
	console.log(partial);
	res.render('todos/partials/' + partial + '.jade');
}