{% extends 'layout.tpl' %}

{% block content %}
	<h1>{{  page_title }}</h1>
	
	{% for user in users %}
		<table class="table table-striped table-hover table-condensed">
			<thead>
				<tr>
					<th>Username</th>
					<th>Firstname</th>
					<th>Lastname</th>
					<th>Email</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
		{% for user in users %}
			<tr>
				<td>{{ user.username }}</td>
				<td>{{ user.first }}</td>
				<td>{{ user.last }}</td>
				<td>{{ user.email }}</td>
				<td>
					<a class="btn btn-small" href="/users/view/{{ user.username }}"><i class="icon-search"></i></a>	  
					<a class="btn btn-small" href="/users/edit/{{ user.username }}"><i class="icon-pencil"></i></a>	  
					<a class="btn btn-small btn-danger" href="/users/delete/{{ user.username }}"><i class="icon-remove icon-white"></i></a>
				</td>				  
			</tr>
		{% endfor %}
			</tbody>
		</table>
	{% else %}
		There are no users in your system! You can register users <a href="/users/new">here</a>.
	{% endfor %}
{% endblock %}

{% block sidebar %}
	<h2>Managing users</h2>
	This page allows you to manage your users
{% endblock %}