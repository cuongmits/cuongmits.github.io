$(document).ready(function(){

	// location

	jQuery.ajax({
		url: 'http://freegeoip.net/json/',
		type: 'POST',
		dataType: 'jsonp',
		success: function(location) {
			pri_email = 'cuongmits@gmail.com';
			if (location.country_code != 'UA' && location.country_code != 'DE') {
				$('#email').attr('data-content', pri_email);
				$('#email span').attr('data-content', pri_email);
			}
		},
		error: function(e) {
			console.log(e);
		}
	});

	// progress bar

	$('.progress').each(function() {
		$('.progress-bar', this).animate({width: $('.progress-bar', this).attr('value') + '%'}, Math.random() * 20000);
	});

	// secret content

	$('.secret-content').click(function() {
		$(this).html($(this).attr('data-content'));
	});

	// send email

	$('.send-email').click(function(){
		window.location = 'mailto:' + $(this).attr('data-content') + '?subject=' + 'Hello Keon from cuongmits.github.io' + '&body=' + 'Leave this text if you\'re lazy with writing!'
	});

	// avatar rotating

	$('#header img').mousemove(function() {
		var v = 'rotate(' + (Math.random() - 0.5) * 2 * 360 + 'deg)';
		$(this).css('transform', v);
	});

});
