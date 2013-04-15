var _ = require('underscore');

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
	{'id': 14, 'parent_id': 13, 'title': 'This is section #14'}
]

exports.index = function(req, res) {
	res.render('index', {});
}

exports.json = function(req, res) {
	var menu = {
		'parents': {},
		'items': {}
	};
	_.each(items, function(item) {
		var parent = item.parent_id;
		var child = item.id;

		if ( ! _.isArray(menu.parents[parent])) {
			menu.parents[parent] = [];
		}

		menu.parents[parent].push(child);
		menu.items[child] = item;

	});
	res.send(menu);	
}