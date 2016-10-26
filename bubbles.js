		// from http://stackoverflow.com/q/31184533 - original work: http://www.kaiserapps.com/lab/#ub
		bubbles = {
			canvas : null,
			ctx : null,
			mousex : winsize.width - 30,
			mousey : winsize.height - 30,
			cntr : 0,
			circleArr : new Array(),
			requestId : undefined,
			init : function() {
				this.canvas = document.getElementById('bubbles');
				this.ctx = this.canvas.getContext('2d');
				this.canvas.width = winsize.width;
				this.canvas.height = winsize.height;

				// Window resize.
				var self = this;
				this.debounceResize = debounce(function() {
					winsize = {width : window.innerWidth, height : window.innerHeight};
					self.canvas.height = winsize.height;
					self.canvas.width = winsize.width;
				}, 10);
				window.addEventListener('resize', this.debounceResize);
			},
			loop : function() {
				this.requestId = requestAnimationFrame(bubbles.loop.bind(this));
				this.update();
				this.render();
			},
			update : function() {
				if( this.cntr++ % 1 == 0 ) {
					this.createCircle();
				}

				for(var circle in this.circleArr) {
					circle = this.circleArr[circle];
					var max = 2, min = -2;
					circle.x += Math.floor(Math.random() * (max - min + 1)) + min;
					circle.y -= Math.random()*15;
				}

				while(this.circleArr.length > 2 && (this.circleArr[0].x + this.circleArr[0].s > winsize.width || this.circleArr[0].x + this.circleArr[0].s < 0 || this.circleArr[0].y + this.circleArr[0].s > winsize.height || this.circleArr[0].y + this.circleArr[0].s < 0) ){
					this.circleArr.shift();
				}
			},
			render : function() {
				// clear
				this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
				// draw the data
				for(var circle in this.circleArr) {
					var current = this.circleArr[circle];
					this.drawCircle(current.x, current.y, current.s);
				}
			},
			createCircle : function() {
				var tmp = this.circleArr[this.circleArr.length-1];

				this.circleArr[this.circleArr.length] = {
					x: this.mousex,
					y: this.mousey,
					s: Math.random()*winsize.height/100
				};
			},
			drawCircle : function(x, y, radius) {
				this.ctx.fillStyle = "#012754";
				this.ctx.beginPath();
				this.ctx.arc(x,y,radius, 0, Math.PI*2, false);
				this.ctx.closePath();
				this.ctx.fill();
			},
			start : function() {
				if( !this.requestId ) {
					document.onmousemove = this.getMouseCoordinates.bind(this);
					this.loop();
				}
			},
			stop : function() {
				if( this.requestId ) {
					window.cancelAnimationFrame(this.requestId);
					this.requestId = undefined;
					document.onmousemove = null;
					// clear
					this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
				}
			},
			getMouseCoordinates : function(ev) {
				var ev = ev || window.event;
				this.mousex = ev.pageX;
				this.mousey = ev.pageY;
			}
		}
