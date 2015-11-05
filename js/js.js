$(document).on('keydown wheel', function(e){
	if (e.keyCode == 40 || e.originalEvent.wheelDelta < 0) {
		e.preventDefault();
		$('html, body').scrollLeft(scrollX + 100);
	} else if (e.keyCode == 38 || e.originalEvent.wheelDelta > 0) {
		e.preventDefault();
		$('html, body').scrollLeft(scrollX - 100);
	}
})

$('.photo').each(function() {
	$(this).children().each(function(p) {
		for(i = -1; i < p; i++) {
			$(this).css("margin", (i + 1) * 50).css("z-index", 100 - i);
		}
	})
})

$('.section').each(function(s) {
	var colours =['#b8fffa', '#FFFEB8', '#B8FFC0', '#FFB8F7', '#B8C0FF']
	for(i = -1; i < s; i++) {
		var num = Math.floor(Math.random() * 6)
		$(this).children().css("background-color", colours[num])
	}
})