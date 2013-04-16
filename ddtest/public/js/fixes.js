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
		$(this).toggleClass('emptyBlock filledBlock');
		console.log('click');
	});
}