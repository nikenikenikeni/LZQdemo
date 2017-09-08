
init();

function init() {
	var load = new Loading();
	load.init();
	load.start();

	// 原生获取数据 <--------------------
	var data = {
	  "action": "get_selfcheck_list",
	  "resultCode": "0",
	  "source": [
	    {
	      "id": 1,
	      "title": "眼睛分泌物增多(眼屎多)"
	    },
	    {
	      "id": 2,
	      "title": "流涕"
	    }
	  ],
	  "errCode": ""
	}
	createEle(data, load);
}

function createEle(data, load) {
	data.source.forEach(function(v, i) {
		var li = $('<li class="pain-item">'+
'	<div class="wrapper" data-toggle="false">'+
'		<span class="title">'+ v.title +'</span><img src="../../src/image/jt_down.png" height="24" width="24" alt="arrow">'+
'	</div>'+
'	<div class="msg">'+
'		<p class="text">是一种突然发生的短暂的意识丧失，历时数秒至数分钟。晕厥一般是大脑展示性缺血或缺氧造成的，能够较快恢复。</p>'+
'	<div class="btn-wrapper">'+
'	<a href="javascript:;">'+
'		<button type="button" class="btn" data-id='+ v.id +'>开始自测</button>'+
'	</a>'+
'	</div>'+
'</div>'+
'</li>')
		$('.pain-list').append(li);
	});
	load.stop();
}


$('.nav-item').click(function() {
	$(this).addClass('active').siblings().removeClass('active');
});

var wrapper = $('.wrapper');

$('.wrapper').click(function() {
	if ($(this).data("toggle") == false){
		$(wrapper).each(function(i,v) {
			_hide($(v));
		});
		_show($(this));
	} else {
		_hide($(this));
	}
});
	
$('.btn').click(function() {
	var id = $(this).data('id');
	//保存 id <--------------------
	//跳转到testing页面
});

function _show(obj) {
	obj.find('img').attr("src","../../src/image/jt_up.png");
	obj.parent().find('.msg').show();
	obj.data("toggle", true);
}
function _hide(obj) {
	obj.find('img').attr("src","../../src/image/jt_down.png");
	obj.parent().find('.msg').hide();
	obj.data("toggle", false);
}