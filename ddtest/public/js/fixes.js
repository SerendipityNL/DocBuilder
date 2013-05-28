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

(function( $ ) {
	var methods = {
		init: function ( that, options ) {
			methods.el = that;
			
			methods.settings = $.extend( {
				  sortable 		: {
					  selector				: '#workfield',
					  connectWith			: '#recycle_bin'
					, items					: ' > div'
					, delay					: 300
					, placeholder			: 'col-placeholder'
					, cursor				: {
						  left 				: 5
						, top				: 5
					}
				  }
				, texteditor	: {
					  selector				: '#textarea'
					, test					: 'bla'
				}
				, test						: 'bla'
			}, options);
			
			methods.startSortable();
		},
		startSortable: function() {

			var sortVar = methods.settings.sortable;

			$(sortVar.selector).sortable({
				  items					: sortVar.items
				, cursorAt				: {
					  left					: sortVar.cursor.left
					, top					: sortVar.cursor.top
				}
				, delay					: sortVar.delay
				, placeholder			: sortVar.placeholder
				, start					: function(e, ui) {
					$(sortVar.placeholder).width(ui.item.width()).height(ui.item.height());
				}
				, change				: function(e, ui) {
					if ($(sortVar.placeholder).prev().length > 0){
						if (ui.item.position().top == $(sortVar.placeholder).prev().position().top){
							// Items are the same
						}
						else {
							methods.placeholderResize(e, ui);
						}
					} else {
						methods.placeholderResize(e, ui);
					}
				}
			}).disableSelection().sortable('refresh');
		},
		placeholderResize: function(e, ui){
			var placeholderSelector = '.' + methods.settings.sortable.placeholder;
			// This stuff must be rewritten under $.fn.getSurroundingBlocks, which needs to be renamed to resizePlaceholder
			var width = ui.item.width();
			$(placeholderSelector).getSurroundingBlocks( function (first, data) {
				if ( (first == false) && (data.returnData.prevTotalSize < 4) ) {
					var restSize = 4 - data.returnData.prevTotalSize;
					if (restSize < parseInt(ui.item.attr('data-colspan'))){
						switch (restSize) {
							case 1:
								width = '23%';
								break;
							case 2:
								width = '48%';
								break;
							case 3:
								width = '73%';
								break;
							case 4:
								width = '98%';
								break;
						}
					}
				}
				$(placeholderSelector).width(width);
			});
		}
	};
	
	$.fn.getPrev = function (data){
		var prevBlockOffset = prevBlockOffset;
		if ($(this).prev().length > 0) {
			if ($(this).prev().position().top == data.usableData.prevBlockOffset) {
				data.returnData.prevBlocks++;
				data.returnData.prevTotalSize += parseInt($(this).prev().attr('data-colspan'));
				$(this).prev().getPrev(data);
			}
		}
	};
	$.fn.getSurroundingBlocks = function(callback){
		var data = {
			  returnData : {
				  prevBlocks 		: 0
				, prevTotalSize		: 0
				, nextBlocks 		: 0
				, nextTotalSize 	: 0
				, first 			: false
			}
			, usableData : {
				  prevBlockOffset	: ''
				, placeholderOffset : ''
			}
			
		};
		data.usableData.placeholderOffset = $(this).position().top;
		var first = false;
		
		if ($(this).prev().length > 0) {
			data.usableData.prevBlockOffset = $(this).prev().position().top;
			$(this).getPrev(data);
		}
		else {
			first = true;
		}
		
		callback(first, data)
	};
	
	$.fn.doctopus = function( method ) {
		return this.each( function() {
			if (methods[method]) {
				return methods[methods].apply( this, Array.prototype.slice.call( arguments, 1) );
			}
			else if ( typeof method === 'object' || ! method ) {
				return methods.init ( this, method );
			}
			else {
				$.error( 'Method ' + method + ' does not exist on jQuery.doctopus' );
			}
		});
	};
})( jQuery );

function placeholderResize(e, ui){

	var width = ui.item.width();
	$('.col-placeholder').getPreviousBlocks(function (first, data) {
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

function selectEmpty() {
	$('#sortable1 > div').on('click.selectEmpty', function() {
		if ($(this).hasClass('emptyBlock')) {
				console.log('hiero');
				$('.selectedEmptyBlock').removeClass('selectedEmptyBlock')
				$(this).addClass('selectedEmptyBlock');
		}
	});
}

function blockListener() {
	$('#sortable1 > div > span').on('click', function(e) {
		
		e.stopPropagation();
		
		if ($(this).hasClass('emptyBlock')) {
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

$(function(){
	blockListener();
	editListener();
	selectEmpty();
	$(document).doctopus();
});