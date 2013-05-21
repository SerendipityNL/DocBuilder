// replace the textarea hide the editor and show p
var saveText =  function (){
	saveTextFunction();
	destroyEditor();
	$('#js-save').unbind('click.saveText');
};

$(document).ready(function() {
	//set default colors
	var current_p   = $('p').getHexColor();
	var current_h1  = $('h1').getHexColor();
	
	// changes the font of the document
	$('.font').change(function() {
		$('body').css("font-family", $(this).val());
		$('.js-editor-iframe').find("body").css("font-family", $(this).val());
	});
	



	if(deletemode = true){
		$('#recycle_bin').droppable({
	      drop: function( event, ui ) {
	      	//alert('dropped');
	      	console.log($(ui.draggable).remove());
	      }
		});
	}


});

function saveTextFunction() {
	var text = $("#textarea").text();
	console.log()
	$('.isBeingEdited').find('p:first').html(''+text+'');
}

function destroyEditor() {
	$('.isBeingEdited').removeClass('isBeingEdited');
	$("#textarea").remove();
	$(".js-editor-container").remove();
}

function createEditor(el){
	destroyEditor();
	$('#sidebar').append('<textarea id="textarea"></textarea>');
	var text = el.parents('[class^="col_"]').addClass('isBeingEdited').find('p:first').text();
	
	$('#textarea').text(''+text+'');
	
	$("#textarea").texteditor({
		defaultActions: "bold, underline, italic, strikethrough, align-left, align-center, align-right"
	});
	$('.js-editor-container').append('<a class="btn btn-primary" href="#" id="js-save">opslaan</a>');
}

$.fn.getHexColor = function() {
	var rgb = $(this).css('color');
	if (!rgb) {
		return '#00000'; //default color
	}
	var hex_rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/); 
	function hex(x) {return ("0" + parseInt(x).toString(16)).slice(-2);}
	if (hex_rgb) {
		return "#" + hex(hex_rgb[1]) + hex(hex_rgb[2]) + hex(hex_rgb[3]);
	}
	else {
		return rgb;
	}
}


