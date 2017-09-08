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
		        data:['已消耗卡路里', '未消耗卡路里']
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
		            name:'已消耗卡路里',
		            type:'bar',
		            stack:'卡路里',
		            barWidth: 15,
		            itemStyle: {
		            	normal: {
		            		color: '#fff'
		            	}
		            },
		            data:[1358]
		        },
		        {
		            name:'未消耗卡路里',
		            type:'bar',
		            stack:'卡路里',
		            barWidth: 15,
		            itemStyle: {
		            	normal: {
		            		color: '#bae5ed'
		            	}
		            },
		            data:[92]
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

	$('.inp').focus(function() {
		$('.backWrapper1').hide().siblings().show();
	});
	$('.cancel').bind('click', function(e) {
		$('.backWrapper1').show().siblings().hide();
		$('.inp').val('');
	});
	$('.complete').click(function() {
		var arr = [];
		$('.inp').each(function(i,v){
			if ($(v).val() != '') {
				arr.push($(v).val());
				$(v).val('');
			} else {
				alert('请输入体重和运动时间')
			}
			
		});
		$('.backWrapper1').show().siblings().hide();
	});


	var data = [{
        "id": "1201",
        "value": "北京市",
        "child": [{
            "id": "001",
            "value": "东城区",//【2级联动:北京市 > 东城区】
        },
            {
                "id": "002",
                "value": "西城区",//【3级联动:北京市 > 西城区 > aaa街道】
                "child": [{
                    "id": "a",
                    "value": "aaa街道"
                }, {
                    "id": "b",
                    "value": "bbb街道"
                }, {
                    "id": "c",
                    "value": "ccc街道"
                }]
            }]
    },
        {
            "id": "1203",
            "value": "福建省",
            "child": [{
                "id": "001",
                "value": "福州市",//【4级联动:福建省 > 福州市 > 晋安区 > a 街道】
                "child": [{
                    "id": "a1",
                    "value": "晋安区",
                    "child": [{
                        "id": "aaa",
                        "value": "a街道"
                    }, {
                        "id": "bbb",
                        "value": "b街道"
                    }, {
                        "id": "ccc",
                        "value": "c街道"
                    }, {
                        "id": "ddd",
                        "value": "d街道"
                    }, {
                        "id": "eee",
                        "value": "e街道"
                    }, {
                        "id": "fff",
                        "value": "f街道"
                    }, {
                        "id": "ggg",
                        "value": "g街道"
                    }, {
                        "id": "hhh",
                        "value": "h街道"
                    }, {
                        "id": "iii",
                        "value": "i街道"
                    }, {
                        "id": "jjj",
                        "value": "j街道"
                    }, {
                        "id": "kkk",
                        "value": "k街道"
                    }]
                },
                    {
                        "id": "b1",
                        "value": "鼓楼区",
                        "child": [{
                            "id": "a",
                            "value": "a道"
                        }, {
                            "id": "b",
                            "value": "b道"
                        }, {
                            "id": "c",
                            "value": "c道"
                        }, {
                            "id": "d",
                            "value": "d道"
                        }, {
                            "id": "e",
                            "value": "e道"
                        }, {
                            "id": "f",
                            "value": "f道"
                        }, {
                            "id": "g",
                            "value": "g道"
                        }, {
                            "id": "h",
                            "value": "h道"
                        }, {
                            "id": "i",
                            "value": "i道"
                        }, {
                            "id": "j",
                            "value": "j道"
                        }, {
                            "id": "k",
                            "value": "k道"
                        }]
                    }]
            },
                {
                    "id": "002",
                    "value": "厦门市",
                    "child": [{
                        "id": "2a",
                        "value": "集美区",//【5级联动:福建省 > 厦门市 > 集美区 > aaa街道 > a1街道】
                        "child": [{
                            "id": "a",
                            "value": "aaa街道",
                            "child": [{
                                "id": "aaa-1",
                                "value": "a1街道",
                            }, {
                                "id": "aaa-2",
                                "value": "a2街道",
                            }]
                        }, {
                            "id": "b",
                            "value": "bbb街道"
                        }, {
                            "id": "c",
                            "value": "ccc街道"
                        }, {
                            "id": "d",
                            "value": "ddd街道"
                        }, {
                            "id": "e",
                            "value": "eee街道"
                        }, {
                            "id": "f",
                            "value": "fff街道"
                        }, {
                            "id": "g",
                            "value": "ggg街道"
                        }, {
                            "id": "h",
                            "value": "hhh街道"
                        }, {
                            "id": "i",
                            "value": "iii街道"
                        }, {
                            "id": "j",
                            "value": "jjj街道"
                        }, {
                            "id": "k",
                            "value": "kkk街道"
                        }, {
                            "id": "l",
                            "value": "lll街道"
                        }, {
                            "id": "m",
                            "value": "mmm街道"
                        }, {
                            "id": "n",
                            "value": "nnn街道"
                        }, {
                            "id": "o",
                            "value": "ooo街道"
                        }, {
                            "id": "p",
                            "value": "ppp街道"
                        }, {
                            "id": "q",
                            "value": "qqq街道"
                        }, {
                            "id": "r",
                            "value": "rrr街道"
                        }, {
                            "id": "s",
                            "value": "sss街道"
                        }, {
                            "id": "t",
                            "value": "ttt街道"
                        }]
                    },
                        {
                            "id": "2b",
                            "value": "湖里区",
                            "child": [{
                                "id": "a",
                                "value": "aaa街道"
                            }, {
                                "id": "b",
                                "value": "bbb街道"
                            }, {
                                "id": "c",
                                "value": "ccc街道"
                            }, {
                                "id": "d",
                                "value": "ddd街道"
                            }, {
                                "id": "e",
                                "value": "eee街道"
                            }, {
                                "id": "f",
                                "value": "fff街道"
                            }, {
                                "id": "g",
                                "value": "ggg街道"
                            }, {
                                "id": "h",
                                "value": "hhh街道"
                            }, {
                                "id": "i",
                                "value": "iii街道"
                            }, {
                                "id": "j",
                                "value": "jjj街道"
                            }, {
                                "id": "k",
                                "value": "kkk街道"
                            }, {
                                "id": "l",
                                "value": "lll街道"
                            }, {
                                "id": "m",
                                "value": "mmm街道"
                            }]
                        },
                        {
                            "id": "2c",
                            "value": "思明区",
                        },
                        {
                            "id": "2d",
                            "value": "同安区",
                            "child": [{
                                "id": "a",
                                "value": "aaa街道"
                            }, {
                                "id": "b",
                                "value": "bbb街道"
                            }, {
                                "id": "c",
                                "value": "ccc街道"
                            }]
                        }]
                }]
        }
    ];

    new MultiPicker({
        input: 'multiPickerInput',//点击触发插件的input框的id
        container: 'targetContainer',//插件插入的容器id
        jsonData: data,
        success: function (arr) {
        	arr.forEach(function(v,i) {
        		if (i == arr.length -1) {
        			document.getElementById('multiPickerInput').value = v.value;
        		}
        	});
        }//回调
    });
});

