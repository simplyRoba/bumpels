var idPrefix = 'item-';
var lightbox = $('#lightbox');
var current = 1;
$('.js-openLightbox').on('click', function () {
    openLightbox(this);
});
$('.js-closeLightbox').on('click', closeLightbox);
$('.js-next').on('click', next);
$('.js-prev').on('click', prev);
function openLightbox(elem) {
    var id = getID(elem);
    showImageFrom(id);
    current = removePrefixFromId(id);
    lightbox.show();
}
function closeLightbox() {
    lightbox.hide();
}
function next() {
    current++;
    if (current > getGallerySize()) {
        current = 1;
    }
    showImageFrom(idPrefix + (current));
}
function prev() {
    current--;
    if (current < 0) {
        current = getGallerySize();
    }
    showImageFrom(idPrefix + (current));
}
function showImageFrom(id) {
    var src = $('#' + id).find('img').attr('src');
    lightbox.find('img').attr('src', src);
}
function removePrefixFromId(id) {
    return parseInt(id.replace(idPrefix, ''));
}
function getID(elem) {
    return $(elem).attr('id');
}
function getGallerySize() {
    return parseInt($('.gallery').data('size'));
}
