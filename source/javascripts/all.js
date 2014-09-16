//= require_tree ./lib
//= require_tree ./app

$(window).load(function(){
	var $topNavigation = $('.nav-collapse');
	var $menuOffsetTop = $topNavigation[0].offsetTop;

	$(document).bind('ready scroll', function(){
		var documentScroll = $(this).scrollTop();
		
		if (documentScroll >=  $menuOffsetTop){
			$topNavigation.addClass('fixed');
		} else {
			$topNavigation.removeClass('fixed');
		}

	});
});
