$(function(){
	startSortable();
	blockListener();
	addBlocksButtons();
	editListener();
});
var editListenLink = function(e) {	
	e.stopPropagation();
	createEditor($(this));
	$('#js-save').on('click.saveText', saveText);
};

function editListener() {
	// when edit event is clicked show editor and replace the p with textarea
	$('.actions .edit').unbind('click', editListenLink);
	$('.actions .edit').on('click', editListenLink);
}

function addBlocksButtons() {
	$('#sidebar button').on('click', function(e) {
		if ($(this).hasClass('addBlocksBefore')) {
			var pos = 'before';
		}
		else if ($(this).hasClass('addBlocksAfter')) {
			var pos = 'after';
		}
		
		if ($('#addBlocksNumber').val() == '') {
			var blocks = 1;
			addBlocks(pos, blocks)
		}
		else if (typeof(parseInt($('#addBlocksNumber').val())) == 'number'){
			var blocks = $('#addBlocksNumber').val()
			$('#addBlocksNumber').val('');
			addBlocks(pos, blocks)
		}
		else {
			alert('Is geen cijfer, probeer het opnieuw!');
		}
		
	});
}

function addBlocks(pos, blocks){
	var htmlToInsert = '';
	
	for (i = 0; i < blocks; i++){
		htmlToInsert += '<div class="col_1 emptyBlock"><span class="addBlock">+</span><span class="deleteBlock">−</span></div>';
	}
	if (pos === 'before') {
		$('#sortable1').prepend(htmlToInsert);
	}
	else if (pos === 'after'){
		$('#sortable1').append(htmlToInsert);
	}
	blockListener();
	restartSortable();
}

function startSortable(){
	$('#sortable1').sortable({
		items:					' > div',
		cursorAt:				{
			left: 	5,
			top: 	5
		},
		delay:					300,
		placeholder:			'sortPlaceholder',
		start:					function(e, ui) {
			$('.sortPlaceholder').width(ui.item.width()).height(ui.item.height());
		},
		change:					function(e, ui) {
			if ($('.sortPlaceholder').prev().length > 0){
				if (ui.item.position().top == $('.sortPlaceholder').prev().position().top){
					// Items are the same
				}
				else {
					placeholderResize(e, ui);
				}
			} else {
				placeholderResize(e, ui);
			}
		}
	}).disableSelection().sortable('refresh');
}

function placeholderResize(e, ui){

	var width = ui.item.width();
	$('.sortPlaceholder').getPreviousBlocks(function (first, data) {
		if (first == false) {
			if (data.previousTotalSize < 4 ){
				var restSize = 4 - data.previousTotalSize;
				if (restSize < parseInt(ui.item.attr('data-colspan'))){	
					switch (restSize) {
						
						case 1:
							width = '170px';
							break;
						case 2:
							width = '350px';
							break;
						case 3:
							width = '530px';
							break;
						case 4:
							width = '710px';
							break;
					}
				}
				
			}
		}
		$('.sortPlaceholder').width(width);
	});
}

function restartSortable() {
	$('#sortable1').sortable('refresh');
}

function blockListener() {
	$('#sortable1 > div > span').on('click', function(e) {
		
		e.stopPropagation();
		
		if ($(this).hasClass('addBlock')) {
			changeToFilled($(this).parent());
		}
		else if ($(this).hasClass('deleteBlock')) {
			removeBlock($(this).parent());
		}
	});
	
	$('#sortable1 div').unbind('click');
	
	$('#sortable1 div').on('click', function(e) {
		if ($(this).hasClass('filledBlock')) {
			changeSize($(this));
		}
	});
}

function changeToFilled(el) {
	el.toggleClass('emptyBlock filledBlock');
	el.html('<ul class="actions"><li><a href="#" class="edit">Edit</a></li></ul><p>changed to filled<p>').attr('data-colspan', '1');
	editListener();
}

function removeBlock(el) {
	el.remove();
}

function changeSize(el) {
//	removeNextEmpty(el);
	var colspan = parseInt(el.attr('data-colspan'));
	switch(colspan) {
		case 1:
			el.toggleClass('col_1 col_2').attr('data-colspan', '2');
			break;
		case 2:
			el.toggleClass('col_2 col_3').attr('data-colspan', '3');
			break;
		case 3:
			el.toggleClass('col_3 col_4').attr('data-colspan', '4');
			break;
		case 4:
			el.toggleClass('col_4 col_1').attr('data-colspan', '1');
			break;
	}
}

function removeNextEmpty(el) {
	if (el.next().hasClass('emptyBlock')) {
		if (el.position().top == el.next().position().top ) {
			el.next().remove();
		}
	}
}

$.fn.getPreviousBlocks = function(callback){
	var previousBlocks = 0;
	var previousTotalSize = 0;
	var nextBlocks = 0;
	var nextTotalSize = 0;
	var placeholderOffset = $(this).position().top;
	var first = false;
	
	if ($(this).prev().length > 0) {
		var blockOffset = $(this).prev().position().top;
		
		if (blockOffset == $(this).prev().position().top) {
			previousBlocks = 1;
			previousTotalSize += parseInt($(this).prev().attr('data-colspan'));
			
			if ($(this).prev().prev().length > 0) {
			
				if (blockOffset == $(this).prev().prev().position().top) {
					previousBlocks = 2;
					previousTotalSize += parseInt($(this).prev().prev().attr('data-colspan'));
			
					if ($(this).prev().prev().prev().length > 0) {
			
						if (blockOffset == $(this).prev().prev().prev().position().top) {
							previousBlocks = 3;
							previousTotalSize += parseInt($(this).prev().prev().prev().attr('data-colspan'));
							
							if ($(this).prev().prev().prev().prev().length > 0) {
			
								if (blockOffset == $(this).prev().prev().prev().prev().position().top) {
									previousBlocks = 4;
									previousTotalSize += parseInt($(this).prev().prev().prev().prev().attr('data-colspan'));
								}
							}
						}
					}
				}
			}
		}
		else {
			previousBlocks = 0;
			previousTotalSize = 0;
		}
	} else {
		first = true;
	}
	
	if ($(this).next().length > 0) {
		
		if (placeholderOffset == $(this).next().position().top) {
			nextBlocks = 1;
			nextTotalSize += parseInt($(this).next().attr('data-colspan'));
			
			if ($(this).next().next().length > 0) {
				
				if (placeholderOffset == $(this).next().next().position().top) {
					nextBlocks = 2;
					nextTotalSize += parseInt($(this).next().next().attr('data-colspan'));
				
					if ($(this).next().next().next().length > 0) {
				
						if (placeholderOffset == $(this).next().next().next().position().top) {
							nextBlocks = 3;
							nextTotalSize += parseInt($(this).next().next().next().attr('data-colspan'));
				
							if ($(this).next().next().next().next().length > 0) {
				
								if (placeholderOffset == $(this).next().next().next().next().position().top) {
									nextBlocks = 4;
									nextTotalSize += parseInt($(this).next().next().next().next().attr('data-colspan'));
								}
							}
						}
					}
				}
			}
		}
		else {
			nextBlocks = 0;
			nextTotalSize = 0;
		}
	}
	
	var data = {
		'previousBlocks' : previousBlocks,
		'previousTotalSize': previousTotalSize,
		'nextBlocks' : nextBlocks,
		'nextTotalSize' : nextTotalSize,
	};
	callback(first, data)
}