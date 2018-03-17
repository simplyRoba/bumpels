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
