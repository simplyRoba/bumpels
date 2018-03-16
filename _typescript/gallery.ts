// Open the lightbox
function openLightbox(index: number) {
    let id: string = '#item-' + index;
    let src: string = $(id).find('img').attr('src');
    let lightbox = $('#lightbox');
    lightbox.find('img').attr('src', src);
    lightbox.show();
}
  
// Close the lightbox
function closeLightbox() {
    $('#lightbox').hide();
}

// trigger animation and let it end
$(".arrow").on("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
    $(this).removeClass("animated")  
})

$(".arrow").hover(function(){
    $(this).addClass("animated");        
})