$(window).scroll(function () {
    if ($('.navbar').offset().top > 25) {
        $('.navbar').addClass('shadow-depth-1');
    }
    else {
        $('.navbar').removeClass('shadow-depth-1');
    }
});
