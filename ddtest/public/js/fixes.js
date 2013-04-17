$(function(){
	startSortable();
	BlockListener();
});

function startSortable(){
	$("#sortable1").sortable({
		items:					' > div',
		cursorAt:				{
			left: 	5,
			top: 	5
		},
		delay:					300,
		placeholder:			'sortPlaceholder',
		start:					function(event, ui) {
			$('.sortPlaceholder').width(ui.item.width());
			console.log('start');
		},
	}).disableSelection().sortable('refresh');	

}

function restartSortable() {
	$("#sortable1").sortable('refresh');
}

function BlockListener() {
	$("#sortable1 div").on('click', function(e) {
		if ($(this).hasClass('emptyBlock')) {
			changeToFilled($(this));
		}
		else if ($(this).hasClass('filledBlock')) {
			changeSize($(this));
		}
	});
}

function changeToFilled(el) {
	el.toggleClass('emptyBlock filledBlock');
	el.text('changed to filled');
}

function changeSize(el) {
	if (el.hasClass('col_1')) {
		el.removeClass('col_1');
		el.addClass('col_2');
	}
	else if (el.hasClass('col_2')) {
		el.removeClass('col_2');
		el.addClass('col_3');
	}
	else if (el.hasClass('col_3')) {
		el.removeClass('col_3');
		el.addClass('col_4');
	}
	else {
		el.removeClass('col_4');
		el.addClass('col_1');
	}
	removeNextEmpty(el);
}

function removeNextEmpty(el) {
	if (el.next().hasClass('emptyBlock')) {
		if (el.position().top == el.next().position().top ) {
			el.next().remove();
		}
	}
}