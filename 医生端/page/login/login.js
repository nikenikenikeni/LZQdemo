$(function() {
	$('input').focus(function() {
		$(this).siblings().show();
	});
	$('input').blur(function() {
		var val = $(this).val();
		if (val == '') {
			$(this).siblings().hide();
		}
	});

	$('.empty').click(function() {
		$(this).siblings().val('');
	});
});