var socket = io.connect(document.URL);

socket.on('new_msg', function(data) {
	$('#messages').append('<p>' + data.msg + '</p>');
});

$('#msg_form').submit(function(evt) {
	// Prevent sending the form
	evt.preventDefault();

	// Get the message
	var message = $('#message').val();

	// Clear the message field
	$('#message').val('');

	// Scroll to the bottom of the messages div
	$('#messages').scrollTop($('#messages')[0].scrollHeight);

	// Send the message to the server
	socket.emit('msg', {msg: message});
});