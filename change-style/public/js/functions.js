function setStyle(name, value) {
	var newName = name.replace('_', '-');
	$('#blocks p').css(newName, value);
}

function updateStyle(name, value) {
	var data = {};
	data[name] = value;
	
	$.ajax({
		type: 'POST',
		url: '/setstyle',
		data: data
	});	
}

$.fn.setPx = function() {
	var name = $(this).attr('name');
	
	// Set the initial value
	// Get the value and strip all but numbers
	var val = $(this).val().replace(/\D/g, '');
	
	// Set the value
	$(this).val(val);

	// Update the field on focus out
	$(this).on('blur', function() {
		// Get the value and strip all but numbers
		var val = $(this).val().replace(/\D/g, '');

		// Set the value
		$(this).val(val);

		// Apply the styling
		setStyle(name, val + 'px');

		// Update the database
		updateStyle(name, val + 'px');
	});

	// Update the field on keyup
	$(this).on('keyup', function() {
		// Get the value and strip all but numbers
		var val = $(this).val().replace(/\D/g, '');

		// Set the value
		$(this).val(val);

		// Apply the styling
		setStyle(name, val + 'px');

		// Update the database
		updateStyle(name, val + 'px');
	});
}

$(document).ready(function() {
	$.getJSON('/getstyle', function(data) {
		for (var key in data) {
			setStyle(key, data[key]);
		}
	});

	$('input').setPx();

	$('select').on('change', function() {
		var name = $(this).attr('name');
		var val = $(this).val();
		//var settingName = cssName.replace('-', '_');

		setStyle(name, val);
		updateStyle(name, val)
	});
});