function setStyle(name, value) {
	$('#blocks p').css(name.replace('_', '-'), value);
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

$(document).ready(function() {
	$.getJSON('/getstyle', function(data) {
		for (var key in data) {
			setStyle(key, data[key]);
		}
	});

	$('select').on('change', function() {
		var name = $(this).attr('name');
		var val = $(this).val();
		//var settingName = cssName.replace('-', '_');

		setStyle(name, val);
		updateStyle(name, val)

		/*var setting = {'p': {'font_size': '13px','color': '#000000','font_family': 'arial','font_weight': 'normal'}}*/
	});
});