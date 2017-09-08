$(function() {
	slide($('.bar'), $('.view-wrapper'));
	slide($('.subTab'), $('.container'));

	function slide(obj, parent) {
		var iWidth = $(window).width();
		parent.width(iWidth*3);
		parent.children().width(iWidth);
		obj.click(function() {
			var idx = $(this).data("idx");
			$(this).addClass('active').siblings().removeClass('active');
			parent.animate({left: -iWidth * idx}, 200);
		});
	}
});