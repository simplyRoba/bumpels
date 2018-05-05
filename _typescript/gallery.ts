const idPrefix: string = 'item-';
const lightbox: JQuery<HTMLElement> = $('#lightbox');
let current: number = 1;

/* Bindings */ 
$('.js-openLightbox').on('click', function() { //dont use arrow function because it would be the wrong "this"
    openLightbox(this);
});
$('.js-closeLightbox').on('click', closeLightbox);
$('.js-next').on('click', next);
$('.js-prev').on('click', prev);

function openLightbox(elem: HTMLElement): void {
    let id: string = getID(elem);
    showImageFrom(id);
    current = removePrefixFromId(id);
    lightbox.show();
}
  
function closeLightbox(): void {
    lightbox.hide();
}

function next():void {
    current++;
    if (current > getGallerySize()) {
        current = 1;
    }
    showImageFrom(idPrefix + (current));
}

function prev():void {
    current--;
    if (current < 0) {
        current = getGallerySize();
    }
    showImageFrom(idPrefix + (current));
}

function showImageFrom(id: string): void {
    let src: string = $('#' + id).find('img').attr('src');
    lightbox.find('img').attr('src', src);
}

function removePrefixFromId(id: string): number {
    return parseInt(id.replace(idPrefix, ''));
}

function getID(elem: HTMLElement): string {
    return $(elem).attr('id');
}

function getGallerySize(): number {
    return parseInt($('.gallery').data('size'));
}