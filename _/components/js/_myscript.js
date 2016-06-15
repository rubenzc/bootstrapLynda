$(function() {

	//Make menus drop automatically
	$('ul.nav li.dropdown').hover(function() {
		$('.dropwdown-menu', this).fadeIn();
	}, function() {
		$('.dropwdown-menu', this).fadeOut('fast');
	});//hover

}); //jQuery is loaded