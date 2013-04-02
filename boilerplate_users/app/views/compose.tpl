<!DOCTYPE html>
<html lang="nl">
	<head>
		<title>DocBuilder - Users</title>
		<link rel="stylesheet" type="text/css" href="/css/stylesheet.css">
		<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="/css/bootstrap-responsive.min.css">
		<link rel="stylesheet" type="text/css" href="/css/fixes.css">
		<script type="text/javascript" src="/js/jquery-1.9.1.min.js"></script>
		<script type="text/javascript" src="/js/bootstrap.min.js"></script>
	</head>
	<body>
		<div class="navbar navbar-inverse navbar-fixed-top">
			<div class="navbar-inner">
				<a class="brand" href="/">Doctopus</a>
				<ul class="nav">
					{% if session.logged_in == true %}
						<li class="dropdown">
							<a class="dropdown-toggle" data-toggle="dropdown">
								Users
							</a>
							<ul class="dropdown-menu">
								<li><a href="/users/">Users</a></li>
								{% if session.isAdmin %}
								<li><a href="/users/new">Users - New</a></li>
								{% endif %}
							</ul>
						</li>
						<li><a href="/compose">Compose</a></li>
						<li><a href="/logout">Logout</a></li>
					{% else %}
						<li><a href="/login">Login</a></li>
					{% endif %}
				</ul>
			</div>
		</div>
		<div class="container">			
				{% block content %}{% endblock %}
			</div>
		<script type="text/javascript" src="/js/compose.js"></script>
	</body>
</html>