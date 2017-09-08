$(function() {
	function Canvas(obj, data, index) {
		this.container = document.getElementById(obj);
		this.GC = this.container.getContext("2d");
		this.num = data.length;
		this.stroke = [];
		this.init(data, index);
	}

	Canvas.prototype = {
		init: function(data, index) {
			var _self = this;
			var color = '#999999';

			this.resizeCanvas();
			
			data.forEach(function(v, i) {
				var coordinate = {
					"x": 60 + (i * 70),
					"y": i % 2 == 0 ? 100 + Math.round(Math.random()*(50-10) + 10) : 100 - Math.round(Math.random()*(50-10) + 10),
					"r": 10
				}
				_self.stroke.push(coordinate);
			});

			for(var i =0; i < this.stroke.length; i++){
				if( this.stroke[i+1] ) {
					var point = {
						"moveX": this.stroke[i].x,
						"moveY": this.stroke[i].y,
						"lineX": this.stroke[i+1].x,
						"lineY": this.stroke[i+1].y
					}
					this.Stroke(point);
				}
				if (i == index) {
					color = '#53ac33';
					this.Arc(this.stroke[i].x, this.stroke[i].y, this.stroke[i].r, data[i].text, color);	
				} else {
					color = '#999999';
					this.Arc(this.stroke[i].x, this.stroke[i].y, this.stroke[i].r, data[i].text, color);
				}
				
			}

			this.touchstart();
		},
		resizeCanvas: function() {
			$(this.container).attr("width", data.length > 5 ? this.num*80 : $(window).get(0).innerWidth);
		},
		Arc: function(x,y,r,text,color) {
			this.GC.beginPath();
				this.GC.fillStyle = color;
				this.GC.fillText(text, x-60, y+4);
				this.GC.arc(x, y, r, 0, 360*Math.PI/180, false);
			this.GC.closePath();
			this.GC.fill();
		},
		Stroke: function(point) {
			this.GC.beginPath();
				this.GC.strokeStyle = 'white';
				this.GC.moveTo(point.moveX,point.moveY);
				this.GC.lineTo(point.lineX,point.lineY);
			this.GC.closePath();
			this.GC.stroke();
		},
		touchstart: function() {
			var _self = this;
			this.container.addEventListener('touchstart', function(e) {
				if (_self.num < 5) {
					return;
				}
				e.preventDefault();
				var touch = event.targetTouches[0];
				startX = touch.clientX;
				sliderX = $(_self.container).offset().left;

				_self.container.addEventListener('touchmove', function(e){
					e.preventDefault();
					var touch = event.targetTouches[0];
					endX = touch.clientX - startX;
					var moveX = sliderX + endX;
					if( moveX > 0 ) {
						_self.container.style.left = 0;
					} else if ( -moveX > (_self.num-5) * 75) {
						_self.container.style.left = -(_self.num-5) * 75 + 'px';
					} else {
						_self.container.style.left = moveX + 'px';
					}
				}, false);

				_self.container.addEventListener('touchend', function() {
					_self.container.removeEventListener('touchmove', _self, false);
					_self.container.removeEventListener('touchend', _self, false);
				}, false);

			}, false);
		}
	}

	function hideMark() {
		$('#hairdressing').height('auto');
		$('.mark').fadeOut(400);
		$('.dateList').css({
			"transform": "translateY(204px)",
			"-webkit-transform": "translateY(204px)"
		});
		setTimeout(function(){
			$('.dateList').html('');
		},400);
	}

	var data = [
		{
			"text": "1月12号"
		},
		{
			"text": "1月28号"
		},
		{
			"text": "2月26号"
		},
		{
			"text": "3月11号"
		},
		{
			"text": "1月12号"
		},
		{
			"text": "1月28号"
		},
		{
			"text": "2月26号"
		},
		{
			"text": "3月11号"
		}
	]
	var c1 = new Canvas('c1', data, 3);
	var params = 0;

	var iWidth = $(window).width();
	$('.view-wrapper').width(iWidth * 2);
	$('.view').width(iWidth);
	$('.bar').click(function() {
		params = $(this).data("idx");
		$(this).addClass('active').siblings().removeClass('active');
		$('.view-wrapper').animate({left: -iWidth*params});
	});

	$('.img-wrapper').click(function() {
		$('.mark').height($(window).height());
		$('#hairdressing').height($(window).height());
		for (var i = 0; i < data.length; i++) {
			var date = $('<div class="date" data-index = '+ i +'>'+ data[i].text +'</div>');
			$('.dateList').append(date);
		}
		setTimeout(function() {
			var listHeight = parseInt($('.dateList').height());
			$('.dateList').css({
				"transform": "translateY(0)",
				"-webkit-transform": "translateY(0)"
			});
		}, 0);
		$('.mark').fadeIn(200);
	});

	$('.mark').on("touchstart", function(e) {
		hideMark();
	});

	$('.cancel').click(function() {
		hideMark();
	});
	
	$('.dateList').on("touchstart", function(e) {
		e.stopPropagation();
	});

	$('.dateList').delegate('.date', 'click', function(e) {
		c1 = new Canvas('c1', data, $(this).data("index"));
		//替换数据
		hideMark();
	});
});