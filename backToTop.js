	backToTopBtn.on('click', function(event){
		//scroll to the top of a project when clicking the backToTop button
		event.preventDefault();
		portfolios3D.forEach(function(element){
			element.scrollProjectTop();
		});
	});
  
  Portfolio3D.prototype.scrollProjectTop = function() {
		this.rows.children('li.selected.open').find('.project-wrapper').animate({scrollTop: 0 }, 300);
	}
