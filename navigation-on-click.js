		this.navigation.on('click', 'a:not(.selected)', function(event){
			//update visible projects when clicking on the filter
			event.preventDefault();
			if( !self.animating ) {
				self.animating = true;
				var index = $(this).parent('li').index();
				//update filter
				$(this).addClass('selected').parent('li').siblings('li').find('.selected').removeClass('selected');
				//show new projects
				self.showNewContent(index);
			}
		});
