$(function() {
	$('.placeholder').click(function() {
		$(this).hide();
		$('.searchInp').focus();
	});
	$('.searchInp').blur(function() {
		$('.placeholder').show();
	});

});