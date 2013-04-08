exports.index = function(req, res) {
	res.render('todos/index.jade', {
		pageTitle: 'Todolist AngularJS'
	});
}

exports.list = function(req, res) {
	var data = [
		{	name: 'Vincent Bremer',
			title: 'Building Angular todo list'},
		{	name: 'Douwe de Haan',
			title: 'Setup Doctopus repository'},
		{	name: 'Tjerk Dijkstra',
			title: "Following REST tutorials"},
		{	name: 'Edwin ten Wolde',
			title: "Creating the bootstrap CSS"}
	];
	setTimeout(function() {
		res.send(data);
	}, 0); // <-- Just for demonstration purposes (e.g 2000) 
}

exports.partial = function(req, res){
	var partial = req.params.partial;
	res.render('todos/partials/' + partial + '.jade');
};