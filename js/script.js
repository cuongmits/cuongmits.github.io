$(document).ready(function(){

	// location

	jQuery.ajax({
		url: 'https://freegeoip.net/json/',
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

	function getRotationDegree(o) {
		var matrix = o.css("-webkit-transform")
			|| o.css("-moz-transform")
			|| o.css("-ms-transform")
			|| o.css("-o-transform")
			|| o.css("transform");
		if(matrix !== 'none') {
			var values = matrix.split('(')[1].split(')')[0].split(',');
			var a = values[0];
			var b = values[1];
			var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
		} else {
			var angle = 0;
		}
		return (angle < 0) ? angle + 360 : angle;
	}

	$.fn.animateRotate = function(angle, duration, easing, complete) {
		var args = $.speed(duration, easing, complete);
		var step = args.step;
		return this.each(function(i, e) {
			args.step = function(now) {
				$.style(e, 'transform', 'rotate(' + now + 'deg)');
				if (step) return step.apply(this, arguments);
			};
			$({deg: getRotationDegree($('#header img'))}).animate({deg: angle}, args);
		});
	};

	$('#header img').mousemove(function() {
		var v = 'rotate(' + (Math.random() - 0.5) * 2 * 360 + 'deg)';
		$('#header img').css('transform', v);
	});

	setInterval(function(){
		var v = (1 + Math.random()) * 2000;
		$('#header img').animateRotate(v, 1000);
	}, 30000);

});
