{% extends 'layout.tpl' %}

{% block content %}
	<h1>{{  page_title }}</h1>

	<div class="errors">
		{% if errors %}
			<ul class="text-error">
	
					<li>{{ errors }}</li>
			</ul>
		{% endif %}
	</div>
{% endblock %}
