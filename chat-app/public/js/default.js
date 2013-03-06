 var channel = window.location.pathname.replace('/', '');

$(document).ready(function() {
	load_history();
	init_chat_functions();
	new_chat(channel);
});

function load_history(){
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
			if (history[i] != 'undefined'){
				if ($('#messages_' + history[i].channel).length > 0){
					$('#messages_'+ history[i].channel).append('<p><span class="strong">' + history[i].name + ': </span>' + history[i].message + '</p>');
				}
			}
		}
	});
		
	$('#message input').focus();
}

function init_chat_functions(){
	$('#messages').scrollTop(300);

	var name = prompt('What is your name');
	
	$('#msg_form').submit(function(evt) {
		// Prevent sending the form
		evt.preventDefault();
		
		// Get the active channel
		var active_channel = get_active_channel();
		
		// Get the message
		var message = $('#message input').val();
	
		// Clear the message field
		$('#message input').val('');
	
		// Scroll to the bottom of the messages div
		$('#messages').scrollTop($('#messages')[0].scrollHeight);
		
		if (message.length > 0){
			
			// Send the message to the server
			socket.emit('msg', {msg: message, name: name, channel: active_channel});
		}
	});
	
	$('#new-chat a').click( function () {
		var channel = prompt('name of new channel');
		new_chat(channel);
	});
	
}

function new_chat(channel){
	var new_channel = '<div id="messages_' + channel + '" class="active-chat-view"></div>',
		new_tab = '<li class="channel-tab active-chat-tab"><a href="#" id="tab_' + channel + '">' + channel + '</a></li>';
	$('.active-chat-view').removeClass('active-chat-view');
	$('.active-chat-tab').removeClass('active-chat-tab');
	$('#messages').append(new_channel);
	$('#message-tabs ul').append(new_tab);
	chat_navigation();
};

function switch_channel(target){
	$('.active-chat-view').removeClass('active-chat-view');
	$('.active-chat-tab').removeClass('active-chat-tab');
	$('#message-tabs #tab_' + target).parent().removeClass('new-messages');
	$('#messages_' + target).addClass('active-chat-view');
	$('#message-tabs #tab_' + target).parent().addClass('active-chat-tab');
};

function chat_navigation(){
	$(function() {
		$('.channel-tab a').click( function () {
			var target_list = $(this).attr('id').split('_');
			switch_channel(target_list[1]);
		});
	});
}

function get_active_channel(){
	var id_list = $('.active-chat-view').attr('id').split('_');
	return id_list[1];
}

var socket = io.connect(window.location.origin);
socket.on('new_msg', function(data) {
	if ($('#messages_'+data.channel).length > 0){
		$('#messages_'+data.channel).append('<p><span class="strong">' + data.name + ': </span>' + data.msg + '</p>');
		if($('#message-tabs #tab_' + data.channel).parent().hasClass('active-chat-tab')){
			$('#messages_'+data.channel).scrollTop($('#messages')[0].scrollHeight);
		}
		else {
			$('#message-tabs #tab_' + data.channel).parent().addClass('new-messages');
		}
	}
	chat_navigation();
});

