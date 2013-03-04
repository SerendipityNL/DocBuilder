$(document).ready(function() {
	$('#msg_text').focus();
});

var socket = io.connect(document.URL);

socket.on('new_msg', function(data) {
	// Scroll to the bottom of the messages div
	$('#messages').scrollTop($('#messages')[0].scrollHeight);

	curdate = new Date();
	time = curdate.getHours() + ':' + curdate.getMinutes();

	var html = '';
	html += '<p>';
	html += '<span class="time">[' + time + ']</span> ';
	html += '<span class="name">Nickname:</span> ';
	html += '<span class="msg">' + data.msg + '</span>';
	html += '</p>';

	$('#messages').append(html);
});

$('#message_form').submit(function(evt) {
	// Prevent sending the form
	evt.preventDefault();

	// Get the message
	var message = $('#msg_text').val();

	// Clear the message field
	$('#msg_text').val('');

	// Send the message to the server
	socket.emit('msg', {msg: message});
});