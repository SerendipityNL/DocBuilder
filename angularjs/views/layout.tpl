<!DOCTYPE html>
<html>
	<head>
		<title>{{ pageTitle }}</title>
		<link rel="stylesheet" type="text/css" href="/css/stylesheet.css">
		<script type="text/javascript" src="/js/angular.min.js"></script>
		{% block head %}{% endblock %}
	</head>
	<body>
		<div id="container" ng-controller="invoiceCount">
			{% block content %}{% endblock %}
		</div>
	</body>
</html>