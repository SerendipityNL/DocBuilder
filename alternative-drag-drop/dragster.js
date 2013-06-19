$.fn.draggable = function() {

	var dragging = false;
	var container = $('#blocks');
	var overflowX = 100;
	var overflowY = 10;
	
	// When clicking on the element, start the function
	$(this).on('click', function() {
		
		// Create a reference to $(this)
		var element = $(this);

		// Check if the user is still dragging
		if (dragging) {
			// Remove the dragging class
			element.removeClass('dragging');

			// Add the dragged class
			element.addClass('dragged');

			// Turn of the mousemove event listener
			$(document).off('mousemove.dragging');
			dragging = false;
		}
		// The isn't dragging, stick the element to the mouse
		else {
			// Add the dragging class
			element.addClass('dragging');		

			// Container position minus the overflow
			var containerTop = container.offset().top - overflowY;
			var containerLeft = container.offset().left - overflowX;

			// Container dimensions with times two the overflow
			var containerHeight = container.height() + (overflowY * 2);
			var containerWidth = container.width() + (overflowX * 2);

			// Element dimensions
			var elementWidth = element.width();
			var elementHeight = element.height();

			// Start the drag function
			$(document).on('mousemove.dragging', function(e) {

				// Set the var dragging to true
				dragging = true;

				// Element position
				var elementTop = e.pageY - (elementHeight / 2);
				var elementLeft = e.pageX - (elementWidth / 2);

				// Keeping the element in the container
				if (elementLeft < containerLeft) {
					elementLeft = containerLeft;
				}
				else if ((elementLeft + elementWidth) > (containerLeft + containerWidth)) {
					elementLeft = containerLeft + (containerWidth - elementWidth);
				}
				else if (elementTop < containerTop) {
					elementTop = containerTop;
				}
				else if (elementTop + elementHeight > containerTop + containerHeight) {
					elementTop = containerTop + (containerHeight - elementHeight);
				}

				// Move the position of the element
				element.offset({
					left: elementLeft,
					top: elementTop
				});
				
				var draggedElementCenter = {
					height: elementTop + (elementHeight / 2),
					width: elementLeft + (elementWidth / 2),
				}
				
				var closest = {
					left: {
						item: null,
						distance: 0
					},						
					right: {
						item: null,
						distance: 0
					}
				}
				
				var blockDistances = new Array();
				
				$('.block').each(function(index, item) {
					if ($(this) != element){						
						var block = $(item);
						var id = block.data('id');
						var blockSizes = {						
							width: block.width(),
							height: block.height(),
							top: block.offset().top,
							left: block.offset().left
						};
						
						blockDistances[index] = (draggedElementCenter.width - blockSizes.left);
					}
					
				});
				
				$('.closeEnough').removeClass('closeEnough');
				
				getClosest(blockDistances, draggedElementCenter);
			});
		}		
	});
}


function getClosest( array , draggedElementCenter ){
	var minimum = {
		distance: 0,
		items: []
	};
	
	$.each(array, function (index, item) {
		if (index === 0) {
			minimum.distance = item;
		}
		else {
			if (item > 0 && item < minimum.distance) {
				minimum.distance = item;
			}
		}
	});
	
	$.each(array, function (index, item) {
		if (item === minimum.distance) {
			var el = $('.block[data-id='+index+']');
			console.log('TOffset: ' + el.offset().top + ' < DEC.h: ' + draggedElementCenter.height + ' TOffset' + (el.offset().top + el.height()) + ' > DEC.h' + draggedElementCenter.height );
			if (el.offset().top < draggedElementCenter.height && (el.offset().top + el.height()) > draggedElementCenter.height){
				console.log('item');
				minimum.items.push(index);
				el.addClass('closeEnough');
			}
		}
	});
};


$(document).ready(function() {
	$('.block').draggable();
});

/*
--------------------------------------------------

container width 640px



--------------------------------------------------
*/
