$(this).addClass('open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
	//wait for the end of the transition and set the animating variable to tru
	self.animating = false;
	$(this).off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
});
