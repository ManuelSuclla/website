$(document).ready(function() {

});

$("#about-me-top").click(function() {
$('html,body').animate({
    scrollTop: $("#About").offset().top},
    'slow');
});

$(window).scroll(function() {
    $(".parallax-1").css({
    'opacity': 1.0 - (($(this).scrollTop()) / 600.0)
    });

    $(".container-1").css({
    'opacity': (($(this).scrollTop()) / 500.0)
    });
});


// var s = $(window).scrollTop(),
// opacityValue = (s/1000.0);
// console.log(1.0 - opacityValue);
// $('.parallax-1.blurred-img').css('opacity', 1.0 - opacityValue);

// $(".parallax-1-blur").css({"-webkit-filter": "blur("+blurValue+"px)","filter": "blur("+blurValue+"px)" })
