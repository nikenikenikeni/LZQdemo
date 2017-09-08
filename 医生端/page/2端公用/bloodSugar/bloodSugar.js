$(function() {
	function cerateChart() {
		var dom = document.getElementById("chart");
		var myChart = echarts.init(dom);

		var date = new Date().getDate();

		var xAxisData = [];

		for (var i = 0; i < 7; i++) {
			xAxisData.push(date + i);
		}

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
		        data:['血糖']
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
		            data : xAxisData,
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
		            name:'血糖',
		            type:'line',
		            itemStyle: {
		            	normal: {
		            		color: '#84ccc9'
		            	}
		            },
		            smooth: true,
		            data:[5.2,6.4,6.1,7.4]
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

	$('.btn').click(function() {
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
});

