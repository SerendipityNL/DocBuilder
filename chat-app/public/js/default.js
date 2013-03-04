$(document).ready(function() {
	$.getJSON('/history.json', function(messages){
		messages = messages.reverse();
		
		var history = new Array();
		
		for(var i = 0; i < 50; i++){
			history[i] = messages[i]
		}
		history = history.reverse();
		
		history = $.grep(history,function(n){
			return(n);
		});
    	
		for(var i = 0; i < 50; i++){
			$('#messages').append('<p><strong>' + history[i].name + ': </strong>' + history[i].message + '</p>');
		}
	});
	
	
	
	$('#message input').focus();
	
});

$('#messages').scrollTop(300);

var name = '';

name = prompt('What is your name');

var socket = io.connect(document.URL);

socket.on('new_msg', function(data) {
	$('#messages').append('<p><strong>' + data.name + ': </strong>' + data.msg + '</p>');
	$('#messages').scrollTop($('#messages')[0].scrollHeight);
});

$('#msg_form').submit(function(evt) {
	// Prevent sending the form
	evt.preventDefault();

	// Get the message
	var message = $('#message input').val();

	// Clear the message field
	$('#message input').val('');

	// Scroll to the bottom of the messages div
	$('#messages').scrollTop($('#messages')[0].scrollHeight);

	// Send the message to the server
	socket.emit('msg', {msg: message, name: name});
});