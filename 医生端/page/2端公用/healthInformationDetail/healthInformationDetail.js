var data = '';

init();
function init() {
	var load = new Loading();
	load.init();
	load.start();
	// 获取数据
	data = {
	  "action": "get_selfcheck_list",
	  "resultCode": "0",
	  "source": [
	    {
	      "newsType": 0,
	      "title": "中大景福™--瑞士米兰朵医疗中心",
	      "sequence": 1,
	      "picture": "/media/130924009_ocWXzS8.jpg",
	      "content": "<p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 10px; padding-bottom: 15px; line-height: 25px; color: rgb(102, 102, 102); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">中大景福™--瑞士米兰朵医疗中心、中大景福™--三亚贝高莉度假酒店、中大景福™--从化健康研究院等国内外多家顶级医疗疗养机构联合，为客户提供海内外疗养、精准体检等服务。</p><h3 class=\"text-center\" style=\"box-sizing: border-box; font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-weight: 500; line-height: 1.1; color: rgb(102, 102, 102); margin: 0px; font-size: 24px; text-align: center; padding: 20px 0px 35px; white-space: normal; background-color: rgb(255, 255, 255);\">中大景福™--瑞士米兰朵医疗中心</h3><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 10px; padding-bottom: 15px; line-height: 25px; color: rgb(102, 102, 102); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">瑞士米兰朵医疗中心位于瑞士明疗养圣地蒙特尔与维沃地区的阿尔卑斯山麓上，直面秀美的日内瓦湖。医疗中心始建于1904年，拥有欧洲最佳的泉水，含丰富矿物质及氧离子，是举世公认的风水宝地。</p><p><br/></p>"
	    },
	    {
	      "newsType": 0,
	      "title": "干细胞治疗",
	      "sequence": 1,
	      "picture": "/media/130924009.jpg",
	      "content": "<p>干细胞移植治疗，是一门先进的医学技术,为一些疑难杂症的治疗带来了希望。干细胞移植治疗是把健康的干细胞移植到患者体内，以达到修复或替换受损细胞或组织，从而达到治愈的目的。干细胞移植治疗范围很广，一般能治疗神经系统疾病、免疫系统疾病、还有其他的一些内外科疾病。干细胞在医学界被称为“万用细胞”，它可以分化成多种功能细胞或组织器官。因在APSC多能细胞实验室中培育出来的干细胞具有“无限”增殖、多向分化潜能，具有造血支持、免疫调控和自我复制等特点</p><p><br/></p><p><img src=\"/media/image/130924009_20170329140200_790.jpg\" title=\"\" alt=\"130924009.jpg\" width=\"397\" height=\"276\" style=\"width: 397px; height: 276px;\"/></p>"
	    }
	  ],
	  "errCode": ""
	};

	create(data, load);
}

function create(data, load) {
	var html = data.source[1].content;
	$('#healthInformationDetail').html(html.split('/media').join('http://120.76.75.234:82/media'));
	load.stop();
}
