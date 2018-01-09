$(document).ready(function(){
	$(".menu-trigger").on("click", function() {
		$("nav ul").slideToggle(500);
	});
	$(window).resize(function() {
		if($(window).width() > 500) {
			$("nav ul").removeAttr("style");
		}
	});
});