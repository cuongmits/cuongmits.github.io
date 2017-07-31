$(document).ready(function(){

	// location

	var onSuccess = function(location) {
		var pri_email = 'cuongmits@gmail.com';
		console.log(location.country.iso_code);
		if (location.country.iso_code != 'DE' && location.country.iso_code != 'DEU' && location.country.iso_code != 'UA' && location.country.iso_code != 'UKR') {
			$('#email').attr('data-content', pri_email);
			$('#email span').attr('data-content', pri_email);
		}
	};
	var onError = function(error) {};
	geoip2.city(onSuccess, onError);

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
