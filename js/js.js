$(document).on('keydown wheel', function(e){
	console.log('hello');
	if (e.keyCode == 40 || e.originalEvent.wheelDelta < 0) {
		e.preventDefault();
		$('html,body').scrollLeft(scrollX + 100);
	} else if (e.keyCode == 38 || e.originalEvent.wheelDelta > 0) {
		e.preventDefault();
		$('html,body').scrollLeft(scrollX - 100);
	}
})