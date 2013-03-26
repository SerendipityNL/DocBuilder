

{% extends 'layout.tpl' %}


{% block content %}
	<h2>{{ page_title }}</h2>

	<div class="errors">
		{% if errors %}
			<ul class="text-error">
				{% for error in errors %}
					<li>{{ error }}</li>
				{% endfor %}
			</ul>
		{% endif %}
	</div>
<ul class="thumbnails">
	<li class="span4">
		<div class="thumbnail">
			<img style="width: 300px; height: 200px;" src="/img/placeholder.png">
			<div class="caption">
				<h3>Document title</h3>
				<p>Document description goes here, along with some information about last edits and stuff.</p>
				<p><a href="#" class="btn btn-primary">Manage</a> <a href="#" class="btn">Edit</a></p>
			</div>
		</div>
	</li>
	<li class="span4">
		<div class="thumbnail">
			<img style="width: 300px; height: 200px;" src="/img/placeholder.png">
			<div class="caption">
				<h3>Document title</h3>
				<p>Document description goes here, along with some information about last edits and stuff.</p>
				<p><a href="#" class="btn btn-primary">Manage</a> <a href="#" class="btn">Edit</a></p>
			</div>
		</div>
	</li>
	<li class="span4">
		<div class="thumbnail">
			<img style="width: 300px; height: 200px;" src="/img/placeholder.png">
			<div class="caption">
				<h3>Document title</h3>
				<p>Document description goes here, along with some information about last edits and stuff.</p>
				<p><a href="#" class="btn btn-primary">Manage</a> <a href="#" class="btn">Edit</a></p>
			</div>
		</div>
	</li>
</ul>
<ul class="thumbnails">
	<li class="span4">
		<div class="thumbnail">
			<img style="width: 300px; height: 200px;" src="/img/placeholder.png">
			<div class="caption">
				<h3>Document title</h3>
				<p>Document description goes here, along with some information about last edits and stuff.</p>
				<p><a href="#" class="btn btn-primary">Manage</a> <a href="#" class="btn">Edit</a></p>
			</div>
		</div>
	</li>
	<li class="span4">
		<div class="thumbnail">
			<img style="width: 300px; height: 200px;" src="/img/placeholder.png">
			<div class="caption">
				<h3>Document title</h3>
				<p>Document description goes here, along with some information about last edits and stuff.</p>
				<p><a href="#" class="btn btn-primary">Manage</a> <a href="#" class="btn">Edit</a></p>
			</div>
		</div>
	</li>
	<li class="span4">
		<div class="thumbnail">
			<img style="width: 300px; height: 200px;" src="/img/placeholder.png">
			<div class="caption">
				<h3>Document title</h3>
				<p>Document description goes here, along with some information about last edits and stuff.</p>
				<p><a href="#" class="btn btn-primary">Manage</a> <a href="#" class="btn">Edit</a></p>
			</div>
		</div>
	</li>
</ul>
<ul class="thumbnails">
	<li class="span4">
		<div class="thumbnail">
			<img style="width: 300px; height: 200px;" src="/img/placeholder.png">
			<div class="caption">
				<h3>Document title</h3>
				<p>Document description goes here, along with some information about last edits and stuff.</p>
				<p><a href="#" class="btn btn-primary">Manage</a> <a href="#" class="btn">Edit</a></p>
			</div>
		</div>
	</li>
	<li class="span4">
		<div class="thumbnail">
			<img style="width: 300px; height: 200px;" src="/img/placeholder.png">
			<div class="caption">
				<h3>Document title</h3>
				<p>Document description goes here, along with some information about last edits and stuff.</p>
				<p><a href="#" class="btn btn-primary">Manage</a> <a href="#" class="btn">Edit</a></p>
			</div>
		</div>
	</li>
</ul>

{% endblock %}

{% block sidebar %}
	<h2>{{ user.username }}</h2>
	<p><strong>Avatar</strong></p>
	<p><img src="{{ avatarUrl }}" class="avatar" /></p>
	<p><strong>Name</strong><br /></p>
	<p>{{user.first}} {{user.last}}</p>
	<p><a href="#" class="btn btn-primary">Manage info</a></p>

{% endblock %}