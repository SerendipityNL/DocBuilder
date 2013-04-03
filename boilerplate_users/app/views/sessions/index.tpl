{% extends 'layout.tpl' %}

{% block content %}
	<h1>{{  page_title }}</h1>

	<div class="succes">
		
		{% if activated %}
			<ul class="text-succes">
					<li>{{ activated }}</li>
			</ul>
		{% endif %}
	</div>

	<div class="errors">

		{% if error %}
			<ul class="text-error">
					<li>{{ error }}</li>
			</ul>
		{% endif %}
	</div>

	{% include 'sessions/_form.tpl' %}
{% endblock %}