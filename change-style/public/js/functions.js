function setStyle(name, value) {
	var newName = name.replace('_', '-');
	jQuery('#blocks p').css(newName, value);
}

function updateStyle(name, value) {
	var data = {};
	data[name] = value;
	
	jQuery.ajax({
		type: 'POST',
		url: '/setstyle',
		data: data
	});	
}

jQuery.fn.setPx = function() {
	var name = jQuery(this).attr('name');
	
	// Set the initial value
	// Get the value and strip all but numbers
	var val = jQuery(this).val().replace(/\D/g, '');
	
	// Set the value
	jQuery(this).val(val);

	jQuery.fn.updateVal = function() {
		var name = jQuery(this).attr('name');
		// Get the value and strip all but numbers
		var val = jQuery(this).val().replace(/\D/g, '');

		if (val.length > 0) {
			val = (val > 64 ? 64 : val);
			val = (val < 8 ? 8 : val);
		}	

		// Set the value
		jQuery(this).val(val);

		// Apply the styling
		setStyle(name, val + 'px');

		// Update the database
		updateStyle(name, val + 'px');
	}

	// Update the field on focus out
	jQuery(this).on('blur', function() {
		jQuery(this).updateVal();
	});

	jQuery(this).on('keyup', function(e) {
		if (e.keyCode == 13) {
			jQuery(this).updateVal();
		}
	})
}

jQuery(document).ready(function() {
	jQuery.getJSON('/getstyle', function(data) {
		for (var key in data) {
			setStyle(key, data[key]);
		}
	});

	jQuery('input').setPx();

	jQuery('select').on('change', function() {
		var name = jQuery(this).attr('name');
		var val = jQuery(this).val();
		//var settingName = cssName.replace('-', '_');

		setStyle(name, val);
		updateStyle(name, val)
	});
});