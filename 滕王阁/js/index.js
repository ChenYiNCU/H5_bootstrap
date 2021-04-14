var k = 0;
var timer;
$(document).ready(function(e) {
	function showpic() {
		$("#sub1 img").each(function(index) {
			if(index == k) {
				
                $(this).css({
					display: "block",
					opacity:0.5
				}).fadeTo(1500, 1);
//				$(this).show(2000);
				
			} else {
				$(this).css({
					display: 'none',
	
				});
			}

		});

		$("#imgc li").each(function(index) {
			if(index == k) {
				$(this).css({
					background: 'white'
				});
			} else {
				$(this).css({
					background: 'none'
				});
			}

		});

		if(k >= $("#sub1 img").length - 1) {
			k = 0;
		} else {
			k++;
		}
	}

	timer = setInterval(showpic, 3000);

	$("#sub1").mouseover(function() {
		clearInterval(timer);
	});
	//，移开
	$("#sub1").mouseout(function() {
		timer = setInterval(showpic, 3000);
	});

	$("#imgc li").click(function() {
		k = $(this).val();
		showpic();
	});
});