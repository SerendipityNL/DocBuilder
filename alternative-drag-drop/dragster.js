$.fn.draggable = function() {

	var dragging = false;
	var container = $('#blocks');
	var overflow = 25;
	
	$(this).on('click', function() {
		
		var element = $(this);

		if (dragging) {
			element.removeClass('move');
			$(document).off('mousemove');
			dragging = false;
		}
		else {
			element.addClass('move');		

			var containerTop = container.offset().top;
			var containerLeft = container.offset().left;
			var containerHeight = container.height();
			var containerWidth = container.width();

			console.log(containerLeft);

			var elementWidth = element.width();
			var elementHeight = element.height();

			$(document).on('mousemove', function(e) {

				var elementTop = e.pageY - (elementHeight / 2);
				var elementLeft = e.pageX - (elementWidth / 2);


				if (elementLeft < containerLeft) {
					elementLeft = containerLeft;
				}
				else if (elementLeft + elementWidth > containerLeft + containerWidth) {
					//elementLeft = elementLeft + containerLeft; 368
					
				}
				

				if (elementTop < containerTop) {
					elementTop = containerTop;
				}
				else if (elementTop + elementHeight > containerTop + containerHeight) {

				}

				element.offset({
					left: elementLeft,
					top: elementTop
				});
			});
			dragging = true;
		}		
	});
}


$(document).ready(function() {
	$('#blocks > div').draggable();
});
