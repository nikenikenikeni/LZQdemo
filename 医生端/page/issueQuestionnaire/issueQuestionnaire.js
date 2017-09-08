
function confirm() {  //点击确认按钮
	var personList = [];
	var str = '确定向';
	$(':checkbox').each(function() {
		if ($(this).is(':checked')) {
			personList.push({
				name: $(this).siblings('.num_name').find('a').html(),
				id: $(this).data("id")
			});
			str += $(this).siblings('.num_name').find('a').html()+ ',';
		}
	});

	if (personList.length != 0) {
		$('.mark').fadeIn(200);
		$('.mark').height($(window).height())
		$('.text').html(str + '共'+ personList.length +'人发送xxx调查问卷?');
		$('.modal').css({top: ($(window).height() - $('.modal').height())/2, left: ($(window).width() - $('.modal').width())/2});
	}
}

$('.cancel').click(function() {
	$('.mark').fadeOut(200);
});
$('.send').click(function() {

	$('.mark').hide();
	//发送数据，回调
	var LetterBox=$('#letter');
	LetterBox.html('<p style="color:#fff">√</p>');
	LetterBox.fadeIn();
	setTimeout(function() {
		LetterBox.fadeOut();
	}, 1000);
});