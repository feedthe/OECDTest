$(function(){
	$(".topics-menu li").click(function(){
		$(".topics-menu li").removeClass('active');
		$(this).addClass('active');
		return false;
	});
});