function buildMenu(parent, data) {
	var html = '';
	html += '<ul class="dd-list">';
	if ( ! _.isEmpty(data.parents)) {
		_.each(data.parents[parent], function(itemId) {
			if (_.isEmpty(data.parents[itemId])) {
				html += '<li class="dd-item"><div class="dd-handle">' + data.items[itemId].title + '</div></li>';
			}
			else {
				html += '<li class="dd-item"><div class="dd-handle">' + data.items[itemId].title + '</div>';
				html += buildMenu(itemId, data);
				html += '</li>';
			}			
		});
	}	

	html += '</ul>';

	return html;	
}


$(document).ready(function() {
	$('li').remove();
	$.getJSON('items.json', function(data) {
		var menu = buildMenu(0, data);
		$('.sections').append(menu);
		$('.sections').nestable({
			listNodeName: 'ul',
			maxDepth: 6
		});
	})
});