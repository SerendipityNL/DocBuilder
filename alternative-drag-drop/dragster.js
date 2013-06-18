$.fn.draggable = function() {

	var attached = false;
	var container = $('#blocks');
	
	$(this).on('click', function() {

		
		// container.height()
		// container.width()
		// container.offset().top
		// container.offset().left
	
		var element = $(this);

		if (attached) {
			element.removeClass('move');
			$(document).off('mousemove');
			attached = false;
		}
		else {

			element.addClass('move');
			$(document).on('mousemove', function(e) {
				element.offset({
					left: e.pageX - (element.width() / 2),
					top: e.pageY - (element.height() / 2)
				});

				//console.log(element.offset().top);

			});
			attached = true;
		}
		
	});
}


$(document).ready(function() {
	$('#blocks > div').draggable();
});
