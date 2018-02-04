// add shadow when scrolling
$(window).scroll(function() {
    if ($(".navbar").offset().top > 30) {
        $(".navbar").addClass("shadow-depth-1");
    } else {
        $(".navbar").removeClass("shadow-depth-1");
    }
});