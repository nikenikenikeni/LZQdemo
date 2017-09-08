//获取数据


function init(response) {
	var data = response.source; //替换数据
	var physical = '你的体质是: ';
	var tendency = '兼有: '
	data.forEach(function(v, i) {
		if (v.score >= 40) {
			physical += v.tcmtype + ',';
		} else {
			tendency += v.tcmtype + ',';
		}
	});

	$('.physicalText').html(physical.substring(0, physical.length-1));
	$('.tendencyText').html(tendency.substring(0, tendency.length-1));
}