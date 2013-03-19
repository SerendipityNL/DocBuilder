{% extends 'layout.tpl' %}

{% block content %}
	<h1>{{  page_title }}</h1>
	{% include 'users/_form.tpl' %}
{% endblock %}