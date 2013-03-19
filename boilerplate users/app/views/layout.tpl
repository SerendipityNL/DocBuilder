<!DOCTYPE html>
<html lang="nl">
	<head>
		<title>Socket.io test</title>
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
				<a class="brand" href="/">DocBuilders</a>
				<ul class="nav">
					<li class="dropdown">
						<a class="dropdown-toggle" data-toggle="dropdown">
							Users
						</a>
						<ul class="dropdown-menu">
							<li><a href="/users/">Users</a></li>
							<li><a href="/users/new">Users - New</a></li>
							<li><a href="/users/edit">Users - Edit</a></li>
							<li><a href="/users/delete">Users - Delete</a></li>
						</ul>	
					</li>
				</ul>
			</did>
		</div>
		<div class="container">			
			<div class="row-fluid">
				<div class="span9 offset3">
					{% block content %}
					{% endblock %}
				</div>
			</div>
		</div>
	</body>
</html>