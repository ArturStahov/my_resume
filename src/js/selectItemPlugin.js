export class SelectItemPlugin {
    constructor({ mobileNavClass, defaultNavClass }) {
        this.mobileNavRef = document.querySelector(mobileNavClass);
        this.defaultNavRef = document.querySelector(defaultNavClass)
        this._bindEvents();
    }

    _bindEvents() {
        this.mobileNavRef.addEventListener('click', this._handlerNavEvent.bind(this));
        this.defaultNavRef.addEventListener('click', this._handlerNavEvent.bind(this));
    }


    _handlerNavEvent({ target }) {

        if (target.nodeName !== 'A') {
            return;
        }
        let selectItem = `#${target.getAttribute('href').slice(1)}`;
        this._selectNodeItem(selectItem)
        console.log(selectItem)
    }

    _selectNodeItem(selectItemClassName) {
        const itemRef = document.querySelector(selectItemClassName);
        const selestItemRef = document.querySelector('.select-item');
        if (selestItemRef) {
            selestItemRef.classList.remove('select-item')
        }
        itemRef.classList.add('select-item');
    }

}