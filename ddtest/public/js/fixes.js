$(function(){
	startSortable();
	blockListener();
	addBlocksButtons()
});

function addBlocksButtons() {
	$('#sidebar button').on('click', function(e) {
	
		if (typeof(parseInt($('#addBlocksNumber').val())) == 'number'){
			var blocks = $('#addBlocksNumber').val()
			
			if ($(this).hasClass('addBlocksBefore')) {
				addBlocks('before', blocks);
			}
			else if ($(this).hasClass('addBlocksAfter')) {
				addBlocks('after', blocks);
			}
		}
		else {
			alert('Is geen cijfer, mongool!!!');
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
		start:					function(event, ui) {
			$('.sortPlaceholder').width(ui.item.width()).height(ui.item.height());
		},
	}).disableSelection().sortable('refresh');	

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
	
	$('#sortable1 div').on('click', function(e) {
		if ($(this).hasClass('filledBlock')) {
			changeSize($(this));
		}
	});
}

function changeToFilled(el) {
	el.toggleClass('emptyBlock filledBlock');
	el.html('<p>changed to filled<p>');
}

function removeBlock(el) {
	el.remove();
}

function changeSize(el) {
	removeNextEmpty(el);
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
}

function removeNextEmpty(el) {
	if (el.next().hasClass('emptyBlock')) {
		if (el.position().top == el.next().position().top ) {
			el.next().remove();
		}
	}
}