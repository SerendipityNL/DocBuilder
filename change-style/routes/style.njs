var blocks = [
	{ "id": 1, "content": "Dit is een tekstveld #1", "cols": 4, "type": "text" },
	{ "id": 2, "content": "Dit is een tekstveld #2", "cols": 2, "type": "text" },
	{ "id": 3, "content": "Dit is een tekstveld #3", "cols": 2, "type": "text" },
	{ "id": 4, "content": "Dit is een tekstveld #4", "cols": 3, "type": "text" },
	{ "id": 5, "content": "Dit is een tekstveld #5", "cols": 1, "type": "text" },
	{ "id": 6, "content": "Dit is een tekstveld #6", "cols": 2, "type": "text" },
	{ "id": 7, "content": "Dit is een tekstveld #7", "cols": 2, "type": "text" },
	{ "id": 8, "content": "Dit is een tekstveld #8", "cols": 4, "type": "text" },
	{ "id": 9, "content": "Dit is een tekstveld #9", "cols": 1, "type": "text" },
	{ "id": 10, "content": "Dit is een tekstveld #10", "cols": 3, "type": "text" }
];

var style = {
	'font_size': '14',
	'color': '#000000',
	'font_family': 'arial',
	'font_weight': 'normal'
}

var options = {
	'font_sizes': {
		'12': '12 px',
		'13': '13 px',
		'14': '14 px',
		'15': '15 px',
		'16': '16 px',
		'20': '20 px',
		'24': '24 px'
	},
	'colors': {
		'#000000': 'Black',
		'#FF6A00': 'Orange',
		'#0026FF': 'Blue',
		'#FF0000': 'Red'
	},
	'fonts': {
		'arial': 'Arial',
		'comic sans ms': 'Comic Sans MS',
		'monospace': 'Monospace',
		'verdana': 'Verdana',
		'ubuntu': 'Ubuntu'
	},
	'weights': {
		'normal': 'Normal',
		'bold': 'Bold'
	}
}

exports.edit = function(req, res) {
	res.render('document/edit', {
		'pageTitle': 'Document wijzigen',
		'options': options,
		'style': style,
		'blocks': blocks
	});
};

exports.setstyle = function (req, res) {
	style[req.body]
	var data = req.body;
	for (var key in data) {
		style[key] = data[key];
	}
	res.send(data);
}

exports.getstyle = function (req, res) {
	res.send(style);
}
