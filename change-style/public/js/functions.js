$(document).ready(function() {
	$('.col-resize').on('click', function(e) {
		e.preventDefault();
		var parent = $(this).parents('div[class^=col-]');
		var oldClass = parent.attr('class');
		var newClass = 'col-' + $(this).attr('data-set-cols');

		if (oldClass != newClass) {
			parent.switchClass(oldClass, newClass, 250);
		}	
	});
});