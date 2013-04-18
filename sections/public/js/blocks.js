$(document).ready(function() {
	canvasSortable();
	elementsSortable();
	resizeBlocks();
});

function canvasSortable() {
	$('.sortable').sortable({
		//helper: 'clone',
		handle: '.move',
		revert: 300,
		delay: 150,
		placeholder: 'col_placeholder',
		appendTo: '.sortable', 
		start: function(event, ui) {
			console.log(ui);
			$('.col_placeholder').width(ui.item.width()).height(ui.item.height());
		},
		stop:function(event, ui) {			
		}
	}).disableSelection();
}

function elementsSortable() {
	$('.elements > ul').disableSelection().sortable({
		connectWith: '.sortable',
		helper: 'clone',
		revert: 300,
		delay: 150,
		placeholder: 'col_placeholder',
		start: function(event, ui) {
			$('.col_placeholder').width('48%').height(ui.item.height());
		},
		stop:function(event, ui) {
			var $uiItem = $(ui.item);
			if ($uiItem.parent().is('.sortable')) $uiItem.remove();
		}
	}).sortable('option', 'connectWith', '.sortable');

	$('.elements > ul').bind('sortstart', function(event, ui) {
		var uiItem = $(ui.item);
		uiItem.clone().show().insertBefore(uiItem);
	});
}

function resizeBlocks() {	
	$('.resize').on('click', function(e) {
		var parent = $(this).parent();		
		if ($(parent).hasClass('col_1')) {
			$(parent).switchClass('col_1', 'col_2', 250);
		}
		else if ($(parent).hasClass('col_2')) {
			$(parent).switchClass('col_2', 'col_3', 250);
		}
		else if ($(parent).hasClass('col_3')) {
			$(parent).switchClass('col_3', 'col_4', 250);
		}
		else {
			$(parent).switchClass('col_4', 'col_1', 250);
		}
	});
}