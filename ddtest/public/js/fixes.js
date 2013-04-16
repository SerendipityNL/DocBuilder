$(function(){

resort();
	/*$(".sortableContent").sortable({
		placeholder:	'sortPlaceholder',
		start:			function(event, ui) {
			$('.ui-sortable-placeholder').width(ui.item.width());
		},
	}).disableSelection();
	
	$(".sortableSidebar").sortable({
		placeholder:	'sortPlaceholder',
		helper:			'clone',
		connectWith:	'.sortableLists'
	}).disableSelection();*/
});

function resort(){
	$("#sortable1, #sortable2").sortable({
		helper:					'clone',
		appendTo:				'#sortable1',
		items:					' > div',
		forcePlaceholderSize: 	true,
		cursorAt:				{
			left: 	5,
			top: 	5
		},
		placeholder:			'sortPlaceholder',
		start:					function(event, ui) {
			ui.item.appendTo('#sortable1');
			console.log(ui);
			//$("#sortable1, #sortable2").sortable('refresh');
			$('.sortPlaceholder').width(ui.item.width());
			console.log('start');
		},
		connectWith:	".connectedSortable"
	}).disableSelection().sortable('refresh');	
	$(".connectSortable").sortable('refresh');
}