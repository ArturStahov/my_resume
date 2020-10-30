import MicroModal from 'micromodal';

MicroModal.init({
    onShow: modal => console.info(`${modal.id} is shown`), // [1]
    onClose: modal => console.info(`${modal.id} is hidden`), // [2]
    openTrigger: 'data-custom-open="open"', // [3]
    closeTrigger: 'data-custom-close', // [4]
    openClass: 'is-open', // [5]
    disableScroll: true, // [6]
    disableFocus: false, // [7]
    awaitOpenAnimation: false, // [8]
    awaitCloseAnimation: false, // [9]
    debugMode: false // [10]
});



export class GalleryPlugin {
    constructor({ selectorGallery }) {
        this.galleryRef = document.querySelector(selectorGallery);
        this.modalImgRef = document.querySelector('[data-type="modal-image"]')
        this._bindEvents();
    }

    _bindEvents() {
        this.galleryRef.addEventListener('click', this._handlerGallery.bind(this))
    }
    _handlerGallery(event) {

        let imgRef = null;
        let datatype = event.target.dataset.type;
        if (datatype === 'gallery-image') {
            let imgSrc = event.target.src;
            this.modalImgRef.src = imgSrc;
            MicroModal.show('modal-content'); // [1]
        }

        if (datatype === 'galery-ico-view') {
            imgRef = event.target.parentNode.nextElementSibling;
            this.modalImgRef.src = imgRef.src;
            MicroModal.show('modal-content'); // [1]
        }

        return
    }


}