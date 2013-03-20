<form method="post" class="form-horizontal">
	<div class="control-group">
		<label class="control-label" for="username">Username</label>
		<div class="controls">
			<input id="username" name="username" type="text" placeholder="Username" value="{{user.username}}">
		</div>
	</div>
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
	<div class="control-group">
		<label class="control-label" for="email">Email</label>
		<div class="controls">
			<input id="email" name="email" type="email" placeholder="email@example.com" value="{{user.email}}">
		</div>
	</div>
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
	<div class="controls">
		<button class="btn btn-primary" type="submit">Submit</button>
</form>