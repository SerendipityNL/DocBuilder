{% extends 'compose.tpl' %}

{% block content %}
<div id="container">

	<a href="#" id="toggle_borders">Toggle borders</a>

	<h1>Lorem ipsum dolor sit amet</h1>

	<ul id="document">
		<li id="1" class="col_4">
			<a href="javascript:void(0)" class="resize">Resize</a>
			<p>Praesent pellentesque tincidunt nunc, vel condimentum augue cursus a. Sed sodales hendrerit odio, dapibus dignissim lectus venenatis nec. Suspendisse et tortor turpis, at volutpat mauris. Donec vitae est justo, sed luctus dolor. Aenean ullamcorper ligula id turpis bibendum faucibus sit amet at tellus. Nam sit amet velit nec erat porta gravida. </p>
		</li>
		<li id="2" class="col_2">
			<p>Praesent pellentesque tincidunt nunc, vel condimentum augue cursus a. Sed sodales hendrerit odio, dapibus dignissim lectus venenatis nec. Suspendisse et tortor turpis, at volutpat mauris. Donec vitae est justo, sed luctus dolor. Aenean ullamcorper ligula id turpis bibendum faucibus sit amet at tellus. Nam sit amet velit nec erat porta gravida. </p>
		</li>
		<li id="3" class="col_2">
			<p>Praesent pellentesque tincidunt nunc, vel condimentum augue cursus a. Sed sodales hendrerit odio, dapibus dignissim lectus venenatis nec. Suspendisse et tortor turpis, at volutpat mauris. Donec vitae est justo, sed luctus dolor. Aenean ullamcorper ligula id turpis bibendum faucibus sit amet at tellus. Nam sit amet velit nec erat porta gravida. 
			</p>
		</li>
	</ul>

	</div>

	<ul id="elements">
		<li class="new_text col_2">Text element</li>
		<li class="new_list col_2">List Element</li>
		<li class="new_image col_2">Image</li>
	</ul>
</div>
	
{% endblock %}

