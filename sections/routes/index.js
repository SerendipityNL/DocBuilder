var items = [
	{'id': 1, 'parent_id': 0, 'title': 'This is section #1'},
	{'id': 2, 'parent_id': 1, 'title': 'This is section #2'},
	{'id': 3, 'parent_id': 1, 'title': 'This is section #3'},
	{'id': 4, 'parent_id': 1, 'title': 'This is section #4'},
	{'id': 5, 'parent_id': 2, 'title': 'This is section #5'},
	{'id': 6, 'parent_id': 2, 'title': 'This is section #6'},
	{'id': 7, 'parent_id': 2, 'title': 'This is section #7'},
	{'id': 8, 'parent_id': 0, 'title': 'This is section #8'},
	{'id': 9, 'parent_id': 8, 'title': 'This is section #9'},
	{'id': 10, 'parent_id': 9, 'title': 'This is section #10'},
	{'id': 11, 'parent_id': 9, 'title': 'This is section #11'},
	{'id': 12, 'parent_id': 11, 'title': 'This is section #12'},
	{'id': 13, 'parent_id': 11, 'title': 'This is section #13'},
	{'id': 14, 'parent_id': 1, 'title': 'This is section #14'}
]

exports.index = function(req, res) {
	res.render('index');
}

exports.blocks = function(req, res) {
	res.render('blocks');
}

exports.getBlocks = function(req, res) {
}

exports.sections = function(req, res) {
	res.render('sections');
}

exports.getSections = function(req, res) {
	var sections = {
		'parents': {},
		'items': {}
	};

	for (i = 0; i < items.length; i++) {
		var parentId = items[i].parent_id;
		var ownId = items[i].id;

		if (typeof(sections.parents[parentId]) == 'undefined') {
			sections.parents[parentId] = [];
		}

		sections.parents[parentId].push(ownId);
		sections.items[ownId] = items[i];
	}
	
	res.send(sections);
}