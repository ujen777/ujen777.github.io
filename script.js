$(document).ready(function() {
	$('.icon-menu').click(function() {
		$("#small-menu").toggle(400);
		if ($(this).hasClass('active')) {
			$('.close-js').hide();
			$('.icon-menu-js').show();
			$(this).removeClass('active');
			$("html,body").css("position", "static");
		} else {
			$('.close-js').show();
			$('.icon-menu-js').hide();
			$(this).addClass('active');
			$("html,body").css("position", "fixed");
		}
	});
});