		audio = {
			sounds : {},
			sources : [{
				lake : 'sounds/quietlake070808.mp3',
				splash : 'sounds/Water Splash-SoundBible.com-800223477.mp3',
				underwater : 'sounds/Underwater_Pool-Mike_Koenig-355864284.mp3'
			}],
			load : function(callback) {
				this.totalFiles = Object.size(this.sources[0]);
				
				for(var key in this.sources[0]) {
					var sound = new Howl({ src: [this.sources[0][key]] }), self = this;
					sound.once('load', function(key) {
						return function() {
							self.sounds[key] = this;
							if( Object.size(self.sounds) === self.totalFiles ) {
								if( typeof callback === 'function' ) {
									callback();
								}
							}
						};
					}(key));
				}
			},
			loop : function(name) {
				this.sounds[name].loop(true);
			},
			volume : function(name, val) {
				this.sounds[name].volume(val);
			},
			play : function(name, time) {
				this.sounds[name].stop();
				var self = this;
				setTimeout(function() {
					self.sounds[name].play();
				}, time || 0);
			},
			stop : function(name) {
				this.sounds[name].stop();
			},
			fadeIn : function(name, time) {
				var self = this;
				setTimeout(function() {
					self.sounds[name].fade(0,1,1500);
				}, time || 0);
			},
			fadeOut : function(name, time) {
				var self = this;
				setTimeout(function() {
					self.sounds[name].fade(1,0,1500);
				}, time || 0);
			},
			toggleMuteAll : function(state) {
				for(var key in this.sounds) {
					this.sounds[key].mute(state);
				}
			}
		}
