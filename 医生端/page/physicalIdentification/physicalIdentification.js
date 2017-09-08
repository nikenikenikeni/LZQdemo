var problem = ['您精力充沛吗？', '您能适应外界自然和社会环境的变化吗？', '您容易失眠吗？', '您容易疲乏吗？', '您说话声音低弱、无力吗？', '您比一般人耐不了寒冷（冬天的寒冷，夏天的冷空调、电扇等）吗?', '您容易忘事（健忘）吗?', '您感到闷闷不乐、情绪低沉吗？', '您容易气短（呼吸短促，接不上气）吗？', '您容易心慌吗？', '您容易头晕或站起时晕眩吗？', '您喜欢安静、懒得说话吗？', '您活动量稍大就容易出虚汗吗？', '您比别人容易患感冒吗？', '您手脚发凉吗？', '您胃脘部、背部或腰膝部怕冷吗？', '您感到怕冷、衣服比别人穿得多吗？', '您吃（喝）凉的东西会感到不舒服或者怕吃（喝）凉的东西吗？', '您受凉或吃（喝）凉的东西后，容易腹泻（拉肚子）吗？', '您感到手脚心发热吗？', '您感觉身体、脸上发热吗？', '您皮肤或口唇干吗？', '您口唇的颜色比一般人红吗？', '您容易便秘或大便干燥吗？', '您面部两颧潮红或偏红吗？', '您感到眼睛干涩吗？', '您感到口干咽燥、总想喝水吗？', '您感到胸闷或腹部胀满吗？', '您感到身体沉重不轻松或不爽快吗？', '您腹部肥满、松软吗？', '您有额部油脂分泌多的现象吗？', '您上眼睑比别人肿（上眼睑有轻微隆起的现象）吗？', '您嘴里有黏黏的感觉吗？', '您平时痰多，特别是咽喉部总感到有痰堵着吗？', '您舌苔厚腻或有舌苔厚厚的感觉吗？', '您面部或鼻部有油腻感或者油亮发光吗？', '您易生痤疮或疮疖吗？', '您感到口苦或嘴里有异味吗？', '您大便黏滞不爽、有解不尽的感觉吗？', '您带下色黄（白带颜色发黄）吗？（限女性回答）或者 您的阴囊部位潮湿吗？（限男性回答）', '您小便时尿道有发热感、尿色浓（深）吗？', '您的皮肤在不知不觉中会出现青紫瘀斑（皮下出血）吗？', '您两颧部有细微红丝吗？', '您身体上有哪里疼痛吗？', '您面色晦黯或容易出现褐斑吗？', '您容易有黑眼圈吗？', '您口唇颜色偏黯吗？', '您容易精神紧张、焦虑不安吗？', '您多愁善感、感情脆弱吗？', '您容易感到害怕或受到惊吓吗？', '您胁肋部或乳房腹痛吗？', '您无缘无故叹气吗？', '您咽喉部有异物感，且吐之不出、咽之不下吗？', '您不是感冒时也会打喷嚏吗？', '您不是感冒也会鼻塞、流鼻涕吗？', '您有因季节变化、温度变化或异味等原因而咳喘的现象吗？', '您容易过敏（对药物、食物、气味、花粉或在季节交替、气候变化时）吗？', '您的皮肤容易起荨麻疹（风团、风疹块、风疙瘩）吗？', '您的皮肤因过敏出现过紫癜（紫红色瘀点、瘀斑）吗？', '您的皮肤一抓就红，并出现抓痕吗？'];
var iHeight = $(window).height();

var results = [];
var num = 0;
var totalProblem = 60;
var totalWidth = $('.progress').width();

init();

function init() {
	calculateProgress();
	$('.item').click(function() {
		var score = Number($(this).data("score"));
		results.push(score);
		if (num < 59) {
			num++;
			$('.num').html(num + 1);
			$('.current').html(num + 1)
			$('#questionTitle').html(problem[num]);
			calculateProgress();
		} else {
			calculateResult();
		}
	});
}

function calculateProgress() {
	var current = $('.current').html();
	$('.schedule').width(totalWidth*(current / totalProblem));
}

function calculatePhysical(physical) { //计算单个体质
	var original = 0;

	physical.forEach(function(v, i) {
		original += Number(results[v-1]);
	});

	var conversion = ((original - physical.length)/(physical.length * 4)) * 100;
	return Math.round(conversion);
}

function calculateResult() { //计算结果
	var gentleTemperament = calculatePhysical([1, 2, 3, 4, 5, 6, 7, 8]); //平和质
	var result = [
		{
			score: calculatePhysical([4, 5, 9, 10, 11, 12, 13, 14]),
			name: '气虚质'
		},
		{
			score: calculatePhysical([6, 14, 15, 16, 17, 18, 19]),
			name: '阳虚质'
		},
		{
			score: calculatePhysical([13, 20, 21, 22, 23, 24, 25, 26]),
			name: '阴虚质'
		},
		{
			score: calculatePhysical([27, 28, 29, 30, 31, 32, 33, 34, 35]),
			name: '痰湿质'
		},
		{
			score: calculatePhysical([36, 37, 38, 39, 40, 41]),
			name: '湿热质'
		},
		{
			score: calculatePhysical([7, 42, 43, 44, 45, 46, 47]),
			name: '血瘀质'
		},
		{
			score: calculatePhysical([54, 55, 56, 57, 58, 59, 60]),
			name: '特禀质'
		},
		{
			score: calculatePhysical([8, 48, 49, 50, 51, 52, 53]),
			name: '气郁质'
		}
	];
	var physical = [];
	var gentle = true;

	result.forEach(function(v, i) {
		if (Number(v.score) >= 40) {
			physical.push({
				tcm: v.name,
				score: v.score
			});
			gentle = false;
		} else if (Number(v.score) > 30 && Number(v.score) < 39) {
			physical.push({
				tcm: v.name,
				score: v.score
			});
		}
	});

	if (gentleTemperament >= 60 && gentle == true) {
		physical.push({
			tcm: '平和质',
			score: Number(gentleTemperament)
		})
	}

	physical //发送这个
}