{% extends 'layout.tpl' %}


{% block content %}
	<h1>{{  page_title }}</h1>

	<div class="errors">
		{% if errors %}
			<ul class="text-error">
				{% for error in errors %}
					<li>{{ error }}</li>
				{% endfor %}
			</ul>
		{% endif %}
	</div>

	{% include 'sessions/_form.tpl' %}
{% endblock %}