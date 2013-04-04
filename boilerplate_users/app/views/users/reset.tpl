{% extends 'layout.tpl' %}

{% block content %}
	<h1>{{  page_title }}</h1>

<form method="post" class="form-horizontal">
	<div class="control-group">
		<label class="control-label" for="email">Email</label>
		<div class="controls">
			<input id="email" name="email" type="email" placeholder="email@example.com" value="">
		</div>
	</div>

	<div class="controls">
		<button class="btn btn-primary" type="submit">Submit</button>
	
</form>
{% endblock %}