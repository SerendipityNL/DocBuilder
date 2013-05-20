$(document).ready(function() {
	$('select').on('change', function() {
		var name = $(this).attr('name');
		var value = $(this).val();

		var setting = {};
		setting[name] = value;		
		console.log(setting);

		$('#blocks p').css(name, value);

		/*
		$.ajax({
			url: '/setstyle'
		})
		*/
		
		
	});
});