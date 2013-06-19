$.fn.draggable = function() {

	var dragging = false;
	var $container = $('#blocks');
	var overflowX = 100;
	var overflowY = 10;
	
	// When clicking on the element, start the function
	$(this).on('click', function() {
		
		// Create a reference to $(this)
		var $element = $(this);

		// Check if the user is still dragging
		if (dragging) {
			// Remove the dragging class
			$element.removeClass('dragging');

			// Add the dragged class
			$element.addClass('dragged');

			// Turn of the mousemove event listener
			$(document).off('mousemove.dragging');
			dragging = false;
		}
		// The isn't dragging, stick the element to the mouse
		else {
			// Add the dragging class
			$element.addClass('dragging');

			// Container dimensions and position
			var container = {
				top: $container.offset().top - overflowY,
				left: $container.offset().left - overflowX,
				height: $container.height() + (overflowX * 2),
				width: $container.width() + (overflowX * 2)
			}

			// Element dimensions
			var element = {
				width: $element.width(),
				height: $element.height()
			}

			// Start the drag function
			$(document).on('mousemove.dragging', function(e) {

				// Set the var dragging to true
				dragging = true;

				// Element position
				element.top = e.pageY - (element.height / 2);
				element.left = e.pageX - (element.width / 2);

				// Keeping the element in the container
				if (element.left < container.left) {
					element.left = container.left;
				}
				else if ((element.left + element.width) > (container.left + container.width)) {
					element.left = container.left + (container.width - element.width);
				}
				else if (element.top < container.top) {
					element.top = container.top;
				}
				else if (element.top + element.height > container.top + container.height) {
					element.top = container.top + (container.height - element.height);
				}

				// Move the position of the element
				$element.offset({
					left: element.left,
					top: element.top
				});
			});
		}		
	});
}

$(document).ready(function() {
	$('.block').draggable();
});

/*
--------------------------------------------------

container width 640px



--------------------------------------------------
*/
