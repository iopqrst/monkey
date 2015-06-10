(function($) {
	$('#S_show_pop').click(function() {
		if ($('#us_panel_menu').hasClass('show')) {
			$('#us_panel_menu').removeClass('show');
			$('.arrow_top').removeClass('open');
			$(".dsx_price").show();
			$(window).unbind('touchmove');
		} else {
			$(".dsx_price").hide();
			$('#us_panel_menu').addClass('show');
			$('.arrow_top').addClass('open');
			$(window).bind('touchmove', function(e) {
				e.preventDefault();
				e.stopImmediatePropagation();
			});
		}
	});

	$('.us_panel_msk').click(function() {
		$('#S_show_pop').trigger('click');
	});
	
	$("#S_submit").click(function(){
		$('#S_show_pop').trigger('click');
	});

	// tab
	$(".add").click(function() {
		// $(this).prev() 就是当前元素的前一个元素，即 text_box
		$(this).prev().val(parseInt($(this).prev().val()) + 1);
	});
	
	$(".min").click(function() {
		// $(this).next() 就是当前元素的下一个元素，即 text_box
		if ($(this).next().val() > 1) {
			$(this).next().val(parseInt($(this).next().val()) - 1);
		} else {
			$(this).next().val(1);
		}
	});
	
	$("#S_package").change(function(){
		$(this).blur();
	});
})(Zepto);