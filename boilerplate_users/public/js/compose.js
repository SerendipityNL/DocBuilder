$('#document > div').on('click', (function(e) {
	e.preventDefault();

	/*var myparent = $(this).parent().parent().parent().parent();*/
	var col = $(this);

	if ($(col).hasClass('col_1')) {
		$(col).removeClass('col_1');
		$(col).addClass('col_2');
	}
	else if ($(col).hasClass('col_2')) {
		$(col).removeClass('col_2');
		$(col).addClass('col_3');
	}
	else if ($(col).hasClass('col_3')) {
		$(col).removeClass('col_3');
		$(col).addClass('col_4');
	}
	else {
		$(col).removeClass('col_4');
		$(col).addClass('col_1');
	}
}));

$('#document').bind("contextmenu",function(e) {
	e.preventDefault();
	var mouseX = e.pageX - 5;
	var mouseY = e.pageY - 5;
	console.log(mouseX);

	$('.contextmenu').css({'top': mouseY, 'left': mouseX}).fadeIn(250);
	
});




