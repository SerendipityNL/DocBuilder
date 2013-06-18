$(document).bind('mousemove', function(e) {
	
	$('.move').css({
		left: e.pageX,
		top: e.pageY
	});
});

$(document).ready(function() {
	$('#blocks > div').on('click', function() {
		$(this).addClass('move');
	});
});
