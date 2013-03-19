{% extends 'layout.tpl' %}


{% block content %}
	<h1>{{  page_title }}</h1>

	<div class="errors"></div>

	{% include 'users/_form.tpl' %}
{% endblock %}