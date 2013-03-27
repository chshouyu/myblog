// js

$(function() {

	$.ajax({
		url: "/test/json",
		dataType: "json",
		success: function(data) {
			if (data && $.isPlainObject(data)) {
				$("#user").text("I am " + data.name);
			}
		}
	});



});