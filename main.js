$(document).ready(init);

function init() {
	$("header > ul > li").hover(
		function() {
			$(this).stop().animate(
			{
				opacity: 1
			}, {
				duration: 250,
				easing: "linear"
			});
		},
		function() {
			$(this).stop().animate(
			{
				opacity: .5
			}, {
				duration: 250,
				easing: "linear"
			});
		});

}