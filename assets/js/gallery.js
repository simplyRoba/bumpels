function openLightbox(index) {
    var id = '#item-' + index;
    var src = $(id).find('img').attr('src');
    var lightbox = $('#lightbox');
    lightbox.find('img').attr('src', src);
    lightbox.show();
}
function closeLightbox() {
    $('#lightbox').hide();
}
