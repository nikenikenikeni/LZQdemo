$(function() {
	var date = {};
	var triacylglyceride = []; //甘油三酯
	var totalcholesterol = []; //总胆固醇
	var hdl = []; //高密度脂蛋白
	var ldl = []; //低密度脂蛋白
	var time = [];
	
	$('.btn').click(function() {
		$(this).parent().addClass('active').siblings().removeClass('active');
		var type = $(this).data("type"); //就是那个 D M Y
		//获取数据
		data = {};
		cerateChart(data.source);
	});

	init();

	function cerateChart(source) {
		var dom = document.getElementById("chart");
		var myChart = echarts.init(dom);

		source.forEach(function(v, i) {
			triacylglyceride.push(v.triacylglyceride);
			totalcholesterol.push(v.totalcholesterol);
			hdl.push(v.hdl);
			ldl.push(v.ldl);
			time.push(v.time);
		});

		Update(0);

		option = {
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : { 
		            type : 'shadow'
		        }
		    },
		    legend: {
		    	bottom: 10,
		    	itemWidth: 8,
		    	itemHeight: 10,
		    	textStyle: {
		    		color: '#fff'
		    	},
		        data:['甘油三酯','总胆固醇', '高密度脂蛋白','低密度脂蛋白']
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        top: '10%',
		        bottom: '18%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : time,
		            axisLine: {
		            	lineStyle: {
		            		color: '#fff'
		            	}
		            },
		            axisTick: {
		            	show: false
		            }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLine: {
		            	show: false,
		            	lineStyle: {
		            		color: '#fff'
		            	}
		            },
		            fontStyle: {
		            	color: '#fff'
		            },
		            splitLine: {
		            	show: false
		            },
		            axisTick: {
		            	show: false
		            }
		        }
		    ],
		    series : [
		    	{
		            name:'甘油三酯',
		            type:'line',
		            itemStyle: {
		            	normal: {
		            		color: '#f8b551',
		            		// lineStyle: {
		            		// 	type: 'dotted'
		            		// }
		            	}
		            },
		            smooth: true,
		            data:triacylglyceride
		        },
		        {
		            name:'总胆固醇',
		            type:'line',
		            itemStyle: {
		            	normal: {
		            		color: '#84ccc9',
		            		// lineStyle: {
		            		// 	type: 'dotted'
		            		// }
		            	}
		            },
		            smooth: true,
		            data:totalcholesterol
		        },
		        {
		            name:'高密度脂蛋白',
		            type:'line',
		            itemStyle: {
		            	normal: {
		            		color: '#eb6877',
		            		// lineStyle: {
		            		// 	type: 'dotted'
		            		// }
		            	}
		            },
		            smooth: true,
		            data:hdl
		        },
		        {
		            name:'低密度脂蛋白',
		            type:'line',
		            itemStyle: {
		            	normal: {
		            		color: '#22ac38',
		            		// lineStyle: {
		            		// 	type: 'dotted'
		            		// }
		            	}
		            },
		            smooth: true,
		            data:ldl
		        }
		    ]

		};

		if (option && typeof option === "object") {
		    myChart.setOption(option, true);
		}
		myChart.on('click', function (param) {
	        var datadataIndex = param.dataIndex;
	        Update(datadataIndex);
	    });
	}
	
	function init(){
		// 获取数据
		date = {
		  "source": [
		    {
		      "triacylglyceride": 5.3,
		      "totalcholesterol": 4.2,
		      "ldl": 2.6,
		      "hdl": 6.1,
		      "time": "2017-02"
		    },
		    {
		      "triacylglyceride": 4.7,
		      "totalcholesterol": 5.6,
		      "ldl": 4.4,
		      "hdl": 5.1,
		      "time": "2017-04"
		    }
		  ],
		  "errCode": "",
		  "resultCode": "0",
		  "action": "request_GGJ_xuezhi"
		}

		cerateChart(date.source);
	}

	function Update(idx){
		$('.triacylglyceride').html(triacylglyceride[idx]);
        $('.totalcholesterol').html(totalcholesterol[idx]);
        $('.hdl').html(hdl[idx]);
        $('.ldl').html(ldl[idx]);
        $('.time').html(time[idx]);
        $('.numerical').html(triacylglyceride[idx] + '/' + totalcholesterol[idx] + '/' + hdl[idx] + '/' + ldl[idx]);
	}
});

