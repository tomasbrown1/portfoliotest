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
	var colours =['#B8fffA', '#FFFEB8', '#B8FFC0', '#FFB8F7', '#B8C0FF', '#FF00F5', '#FF8787', '#002DFF']
	for(i = -2; i < s; i++) {
		var num1 = Math.floor(Math.random() * 9);
		var num2 = Math.floor(Math.random() * 9);
		$(this).css("background", "linear-gradient(" + colours[num1] + "," + colours[num2])
	}

})

$('.photo').children().on('click', function() {
	$('img').animate({ "top": "-=50px", "left": "-=50px" }, "slow");
	$('img:first').fadeTo("slow", 0).insertAfter('img:last');
})
