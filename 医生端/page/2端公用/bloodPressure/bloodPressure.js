$(function() {
	var date = {};
	var triacylglyceride = []; //舒张压
	var totalcholesterol = []; //收缩压sts
	var time = [];

	$('.btn').click(function() {
		$(this).parent().addClass('active').siblings().removeClass('active');
	});

	function cerateChart() {
		var dom = document.getElementById("chart");
		var myChart = echarts.init(dom);
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
		        data:['舒张压','收缩压']
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
		            data : [9,11,13,15,17,21],
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
		            name:'舒张压',
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
		            data:[60,70,65,78,81,64]
		        },
		        {
		            name:'收缩压',
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
		            data:[126,138,134,140,126,130]
		        }
		    ]

		};

		if (option && typeof option === "object") {
		    myChart.setOption(option, true);
		}
		myChart.on('click', function (param) {
	        console.log(param)
	    });
	}
	cerateChart();
});

