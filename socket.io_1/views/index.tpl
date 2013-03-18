<!DOCTYPE html>
<html lang="nl">
	<head>
		<title>Socket.io test</title>
		<link rel="stylesheet" type="text/css" href="/css/stylesheet.css">
		<script type="text/javascript" src="/js/jquery.js"></script>
		<script type="text/javascript" src="/socket.io/socket.io.js"></script>
	</head>
	<body>
		<div id="container">
			<h1>Websocket IO</h1>
			<p>Testen met websockets via Socket.io</p>
			{% if nickname %}
				<div id="chatbox">
					<div id="wrapper">
						<div id="messages">
						</div>
					</div>
				</div>

				<form action="" autocomplete="off" id="message_form">
					<input type="hidden" name="nickname" id="msg_nickname" value="{{ nickname }}">
					{{ nickname|title }}:
					<input type="text" name="message" id="msg_text" placeholder="Type your message.." value="">
					<input type="submit" value="Verzenden &raquo;">
				</form>
			</div>
			{% else %}
				<p>
					Stel een nickname in:
				</p>
				<form action="" method="post">
					<input type="text" name="nickname" value="" placeholder="Nickname.."><input type="submit" value="Instellen &raquo;">
				</form>
			{% endif %}
			
		<script type="text/javascript" src="/js/default.js"></script>
	</body>
</html>