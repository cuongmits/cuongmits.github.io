$(document).ready(function(){
	$('.progress').each(function() {
		$('.progress-bar', this).animate({width: $('.progress-bar', this).attr('value') + '%'});
	});

	$('.secret-content').click(function() {
		$(this).html($(this).attr('data-content'));
	});

	$('.send-email').click(function(){
		window.location = 'mailto:' + $(this).attr('data-content') + '?subject=' + 'Hello Keon from cuongmits.github.io' + '&body=' + 'Leave this text if you\'re lazy with writing!'
	});

	$('#header img').mousemove(function() {
		var v = 'rotate(' + (Math.random() - 0.5) * 2 * 360 + 'deg)';
		console.log(v);
		//$(this).animate({-ms-transform: v});
		//$(this).animate({-webkit-transform: v});
		//$(this).animate({transform: v});
		$(this).css('transform', v);
	});
});
