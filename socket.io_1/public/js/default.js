function append_msg(date, nickname, message) {
	var html = '';
	html += '<p>';
	html += '<span class="time">[' + date + ']</span> ';
	html += '<span class="name">' + nickname + ':</span> ';
	html += '<span class="msg">' + message + '</span>';
	html += '</p>';
	$('#messages').append(html);
}

$(document).ready(function() {
	$('#msg_text').focus();

	$.getJSON(document.URL + 'messages.json', function(data) {
		$.each(data, function(i, item) {
			append_msg(item.date, item.nickname, item.message);
		});
	});

});


var socket = io.connect(document.URL);

socket.on('new_msg', function(data) {
	// Scroll to the bottom of the messages div
	$('#messages').scrollTop($('#messages')[0].scrollHeight);

	curdate = new Date();
	time = curdate.getHours() + ':' + curdate.getMinutes();

	append_msg(time, data.nickname, data.message);	
});

$('#message_form').submit(function(evt) {
	// Prevent sending the form
	evt.preventDefault();

	// Get the message
	var message = $('#msg_text').val();
	var nickname = $('#msg_nickname').val();

	// Clear the message field
	$('#msg_text').val('');

	if (message.length > 1) {
		if (message == '/clear') {
			$('#messages > p').remove();
		}
		else {
			// Send the message to the server
			socket.emit('msg', {message: message, nickname: nickname});
		}
	}	
});