$(function() {
	var iWidth = $(window).width();
	$('.view-wrapper').width(iWidth*3);
	$('.view').width(iWidth);
	slide($('.subTab'), $('.view-wrapper'));
	
	function slide(obj, parent) {
		obj.click(function() {
			var idx = $(this).data("idx");
			$(this).addClass('active').siblings().removeClass('active');
			parent.animate({left: -iWidth * idx}, 200);
		});
	}
});