$(function() {
	$('.placeholder').click(function() {
		$(this).hide();
		$('.searchInp').focus();
	});
	$('.searchInp').blur(function() {
		$('.placeholder').show();
	});

	slide();
	function slide() {
		var iWidth = $('.slide > li').width();
		$('.slide').css({width: $('.slide-img').length*iWidth});
		var slide = document.getElementById('slide');
		slide.addEventListener('touchstart', function(e) {
			var touch = event.targetTouches[0];
			startX = touch.clientX;
			sliderX = $('.slide').offset().left;

			slide.addEventListener('touchmove', touchMove, false);

			slide.addEventListener('touchend', touchEnd, false);

		}, false);

		function touchMove(e) {
			e.preventDefault();
			var touch = e.targetTouches[0];
			endX = touch.clientX - startX;
			var moveX = sliderX + endX;

			if( moveX > 0 ) {
				slide.style.left = 0;
			} else if ( -moveX > ($('.slide-img').length-2.4) * iWidth) {
				slide.style.left = -($('.slide-img').length-2.4)* iWidth + 'px';
			} else {
				slide.style.left = moveX + 'px';
			}
		}

		function touchEnd() {
			slide.removeEventListener('touchmove', touchMove, false);
			slide.removeEventListener('touchend', touchEnd, false);
		}
	}

});