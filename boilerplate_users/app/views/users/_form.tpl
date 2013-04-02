<form method="post" class="form-horizontal">
	<div class="control-group">
		<label class="control-label" for="username">Username</label>
		<div class="controls">
			<input id="username" name="username" type="text" placeholder="Username" value="{{user.username}}">
		</div>
	</div>
	{% if user %}
		<div class="control-group">
			<label class="control-label" for="first">Firstname</label>
			<div class="controls">
				<input id="first" name="first" type="text" placeholder="Firstname" value="{{user.first}}">
			</div>
		</div>
		<div class="control-group">
			<label class="control-label" for="last">Lastname</label>
			<div class="controls">
				<input id="last" name="last" type="text" placeholder="Lastname" value="{{user.last}}">
			</div>
		</div>
	{% endif %}
	<div class="control-group">
		<label class="control-label" for="email">Email</label>
		<div class="controls">
			<input id="email" name="email" type="email" placeholder="email@example.com" value="{{user.email}}">
		</div>
	</div>

	{% if user %}
		<div class="control-group">
			<label class="control-label" for="password">Current password</label>
			<div class="controls">
				<input id="oldPassword" name="oldPassword" type="password" placeholder="Current Password">
			</div>
		</div>
		<div class="control-group">
			<label class="control-label" for="password">New password</label>
			<div class="controls">
				<input id="newPassword" name="newPassword" type="password" placeholder="New Password">
			</div>
		</div>
		<div class="control-group">
			<label class="control-label" for="password">Confirm new password</label>
			<div class="controls">
				<input id="confirmNewPassword" name="confirmNewPassword" type="password" placeholder="Confirm new password">
			</div>
		</div>
		<div class="control-group">
			<label class="control-label" for="password">Admin</label>
			<div class="controls">
				<select name="admin">
					{% if user.admin == 1 %}
						<option value="0">No</option>
						<option value="1" selected="selected">Yes</option>
					{% else %}
						<option value="0" selected="selected">No</option>
						<option value="1">Yes</option>
					{% endif %}
				</select>
			</div>
		</div>
	{% else %}
		<div class="control-group">
			<label class="control-label" for="password">Password</label>
			<div class="controls">
				<input id="password" name="password" type="password" placeholder="Password">
			</div>
		</div>
		<div class="control-group">
			<label class="control-label" for="password">Confirm password</label>
			<div class="controls">
				<input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm password">
			</div>
		</div>	
	{% endif %}
	
	<div class="controls">
		<button class="btn btn-primary" type="submit">Submit</button>
</form>