$(document).ready(function() {

    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top}, 900, 'swing');
	});

    $(window).scroll(function() {
        $(".parallax-1").css({
        'opacity': 1.0 - (($(this).scrollTop()) / 600.0)
        });

    });
});
