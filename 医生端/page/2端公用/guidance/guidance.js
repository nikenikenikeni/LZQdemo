var num = 1;
var totalNum = 0;
var source = '';
var weightArray = [];
var id = 1 //从首页获取的id
init(id, true, 0);

//为li绑定事件，并进行后续题操作
$('.answerList').delegate('.item', 'click', function(event) {
	if (num < totalNum) {
		num++;
		saveWeight(source.relation, $(this).data("idx"));
		init(id, source.hasNext, source.nextQuestion);
	} else {
		$('#answer-wrapper').hide().siblings().show();
		cerateChart();
	}
});

function init(id, hasNext, nextQuestion) {
	var load = new Loading();
	load.init();
	load.start();

	var promise = new Promise(function(resolve, reject) {
		// 获取数据
		var data = {
		  "errCode": "",
		  "source": {
		    "relation": [
		      {
		        "result": {
		          "id": 3,
		          "name": "头痛",
		          "desc": "头痛​程度有轻有重，疼痛时间有长有短。疼痛形式多种多样，常见胀痛、闷痛、撕裂样痛、电击样疼痛、针刺样痛，部分伴有血管搏动感及头部紧箍感，以及恶心、呕吐、头晕等症状"
		        },
		        "factor": "1,1,0"
		      },
		      {
		        "result": {
		          "id": 1,
		          "name": "失眠",
		          "desc": "睡眠质量差,睡眠感觉障碍,睡眠浅容易做梦,入睡困难"
		        },
		        "factor": "5,2,3"
		      }
		    ],
		    "hasNext": true,
		    "answer": [
		      {
		        "sequence": 3,
		        "answer": "基本无睡眠问题"
		      },
		      {
		        "sequence": 2,
		        "answer": "多梦或梦魇,夜惊"
		      },
		      {
		        "sequence": 1,
		        "answer": "入睡困难"
		      }
		    ],
		    "question": {
		      "id": 1,
		      "sequence": 1,
		      "question": "睡眠质量如何?"
		    },
		    "totalCount": 4,
		    "nextQuestion": 2
		  },
		  "resultCode": "0",
		  "action": "get_selftest_list"
		}
		source = data.source;
		if (source) {
			resolve(source);
		} else {
			reject(error);
		}
	});

	promise.then(function(source) {
		if (totalNum == 0) {
			totalNum = source.totalCount;
			$('.totalProblem').html(totalNum);
		}
		$('.current').html(num);
		$('.num').html(num);
		$('#questionTitle').html(source.question.question);
		calculateProgress();
		createLi(source.answer, load);
	}, function(err) {
		alert(err);
	});
}
//生成li 答案选项
function createLi(arr, load) {
	$('.answerList').html('');
	arr.forEach(function(v,i) {
		var order = '';

		switch(i){
			case 0:
				order = 'A.';
				break;
			case 1:
				order = 'B.';
				break;
			case 2:
				order = 'C.';
				break;
			case 3:
				order = 'D.';
				break;
			case 4:
				order = 'E.';
				break;
		}

		var li = $('<li class="item" data-idx='+ i +'>'+ order +'&nbsp;&nbsp;'+ v.answer +'</li>');

		$('.answerList').append(li);
	});

	load.stop();
}

function saveWeight(source, index) {
	if (weightArray.length == 0) {
		source.forEach(function(v, i) {
			weightArray.push({
				id: v.result.id,
				relate: Number(v.factor.split(',')[index])
			});
		});
	} else {
		source.forEach(function(v, i) {
			var add = true;
			weightArray.forEach(function(el, j) {
				if (el.id == v.result.id) {
					el.relate += parseInt(v.factor.split(',')[index]);
					add = false;
				}
			});
			if (add) {
				weightArray.push({
					id: v.result.id,
					relate: Number(v.factor.split(',')[index])
				});
			}
		});
	}
	console.log(weightArray)
}

// 生成柱状图
function cerateChart() {
	var dom = document.getElementById("chart");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;

	option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'left',
	        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
	    },
	    series : [
	        {
	            name: '访问来源',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
	                {value:335, name:'直接访问'},
	                {value:310, name:'邮件营销'},
	                {value:234, name:'联盟广告'},
	                {value:135, name:'视频广告'},
	                {value:1548, name:'搜索引擎'}
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};


	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	}

}

$('.progress-title').click(function() {
	if ($(this).data("toggle")) {
		$(this).siblings().hide();
		$(this).data("toggle", false);
	} else {
		$(this).siblings().show();
		$(this).data("toggle", true);
	}
});


// 计算进度条
function calculateProgress() {
	var totalProblem = $('.totalProblem').html();
	var current = $('.current').html();
	var totalWidth = $('.progress').width();
	$('.schedule').width(totalWidth*(current / totalProblem));
}

