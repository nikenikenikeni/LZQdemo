$(function() {
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
		        data:['']
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
		            data : [0,12,24],
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
		            name:'',
                    type:'line',
		            barWidth: 15,
		            itemStyle: {
		            	normal: {
		            		color: '#fff'
		            	}
		            },
		            data:[1358,1200,1100]
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
    var date = new Date();
    $('#findTime').val(''+ date.getFullYear() +'-'+ Number(date.getMonth() + 1) +'-'+ date.getDate() +'');
    $('#findTime').mdater();
});


$('.tab').click(function() {
	$(this).addClass('active').siblings().removeClass('active');
});