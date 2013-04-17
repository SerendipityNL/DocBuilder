function canvas_sortable() {
	$('.canvas > ul').sortable({
		//helper: 'clone',
		revert: 300,
		delay: 150,
		placeholder: 'col_placeholder',
		appendTo: '.canvas > ul', 
		start: function(event, ui) {
			console.log(ui);
			$('.col_placeholder').width(ui.item.width()).height(ui.item.height());
		},
		stop:function(event, ui) {			
		}
	}).disableSelection();
}

function elements_sortable() {
	$('.elements > ul').disableSelection().sortable({
		/*connectWith: '.canvas > ul',*/
		helper: 'clone',
		revert: 300,
		delay: 150,
		placeholder: 'col_placeholder',
		start: function(event, ui) {
			$('.col_placeholder').width('48%').height(ui.item.height());
		},
		stop:function(event, ui) {
			var $uiItem = $(ui.item);
			if ($uiItem.parent().is('.canvas > ul')) $uiItem.remove();
		}
	}).sortable('option', 'connectWith', '.canvas > ul');

	$('.elements > ul').bind('sortstart', function(event, ui) {
		var uiItem = $(ui.item);
		uiItem.clone().show().insertBefore(uiItem);
	});
}

function resize_blocks() {
	/*
	
	DOESN'T WORK, HAS PROBLEMS WITH THE SORTABLE!!!!!!!!!

	$('.canvas > ul > li').on('click', function(e) {
		e.stopPropagation();
		var cls = $(this).attr('class');
		$(this).addClass('col_4');
		console.log(cls);
	});
	*/
}

$(document).ready(function() {
	canvas_sortable();
	elements_sortable();
	resize_blocks();
});