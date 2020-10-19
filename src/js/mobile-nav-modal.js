
export class mobileNavModal {

    constructor({ pageNavClass, buttonNavClass, modalwindowClass }) {
        this.pageNavRef = document.querySelector(pageNavClass);
        this.controlBtn = document.querySelector(buttonNavClass);
        this.modalwindowsRef = this.pageNavRef.querySelector(modalwindowClass);
        this.lines = this.controlBtn.querySelectorAll(".line");
        this.isActiv = false;
        this.cls = { open: "open", close: "close" }
        this.btnClass = this.cls.open;
        this._bindEvents();

    }

    _bindEvents() {
        this.controlBtn.addEventListener('click', this._handlerButtonEvent.bind(this));
        this.modalwindowsRef.addEventListener('click', this._handlerModalWindowsEvent.bind(this));
    }

    _handlerButtonControlModal() {
        if (this.controlBtn.classList.contains(this.cls.open)) {
            this.controlBtn.classList.remove(this.btnClass);
            this.btnClass = this.cls.close;
        } else if (this.controlBtn.classList.contains(this.cls.close)) {
            this.controlBtn.classList.remove(this.btnClass);
            this.btnClass = this.cls.open;
        }
        void this.controlBtn.offsetWidth;
        this.controlBtn.classList.add(this.btnClass);
    }

    _closeModal() {
        this.pageNavRef.classList.remove('mob-nav-modal-open')
        this.pageNavRef.classList.add('mob-nav-modal-close')
        this.isActiv = false;
    }

    _openModal() {
        this.pageNavRef.classList.remove('mob-nav-modal-close')
        this.pageNavRef.classList.add('mob-nav-modal-open')
        this.isActiv = true;
    }

    _handlerModal() {
        if (!this.isActiv) {
            this._openModal()
            return;
        }
        if (this.isActiv) {
            this._closeModal();
        }
    }

    _handlerButtonEvent() {
        this._handlerButtonControlModal()
        this._handlerModal()

    }

    _handlerModalWindowsEvent(event) {
        if (event.target.nodeName !== 'A') {
            return;
        }
        this._closeModal();
        this._handlerButtonControlModal();
    }

}



