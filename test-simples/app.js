var simples = require('simples'),
	simplet = require('simplet'),
	stringEngine = simplet({
		open: '{{',
		close: '}}'
	}),
	fileEngine = simplet(),
	render = require('./view');

var server = new simples(1337);



server.serve('static_files');

server.start(1337, function () {
    console.log('started');
});

server.get('/', function(req, res){
	console.log('res');
	res.end(render.view(fileEngine, 'test'));
});