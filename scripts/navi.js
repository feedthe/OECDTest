$(function(){
	$(".navbar-nav li").click(function(){
		$(".navbar-nav li").removeClass('active');
		$(this).addClass('active');
		return false;
	});
	
	$(".lang").click(function(){
		$(".lang").removeClass('active');
		$(this).addClass('active');
		return false;
	});
});