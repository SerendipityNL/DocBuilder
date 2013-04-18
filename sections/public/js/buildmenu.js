function buildMenu(parent, data) {
	var html = '';
	html += '<ul class="dd-list">';
	if (typeof(data.parents) != 'undefined') {
		var childeren = data.parents[parent];		
		for (var i = 0; i < childeren.length; i++) {
			var itemId = childeren[i];
			if (typeof(data.parents[itemId]) == 'object') {
				html += '<li class="dd-item"><div class="dd-handle">' + data.items[itemId].title + '</div>';
				html += buildMenu(itemId, data);
				html += '</li>';
			}
			else {
				html += '<li class="dd-item"><div class="dd-handle">' + data.items[itemId].title + '</div></li>';
			}			
		}
	}
	html += '</ul>';
	return html;
}

$(document).ready(function() {
	$.getJSON('sections.json', function(data) {
		var menu = buildMenu(0, data);
		$('.dd-sections').append(menu);
		$('.dd-sections').nestable({
			listNodeName: 'ul',
			maxDepth: 6
		});
	})
});