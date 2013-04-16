$(function() {
	$('.canvas > ul').sortable({
		helper: 'clone',
		revert: 300,
		/*placeholder: 'placeholder'*/
	}).disableSelection();

	$('.elements > ul').sortable({
		helper: 'clone',
		connectWith: '.canvas > ul',
		revert: 300,
		/*placeholder: 'placeholder',*/
		start: function(event, ui) {
			$(ui.item).show();
			clone = $(ui.item).clone();
			before = $(ui.item).prev();
		},
		stop:function(event, ui) {
			before.after(clone);
		}

	}).disableSelection();
});