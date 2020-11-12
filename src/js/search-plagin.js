const debounce = require('lodash.debounce');

export class SearchPlagin {
    constructor({ btnPluginSelector, searchPluginSelector, selectorInput }) {
        this.btnPlugincontrolRef = document.querySelector(btnPluginSelector);
        this.searchPluginRef = document.querySelector(searchPluginSelector);
        this.isActiv = false;
        this.$elInput = document.querySelector(selectorInput);
        this.arrayList = Array.from(document.querySelectorAll('p'));
        this._bindEvents();
        this.$elInput.addEventListener('input', debounce(this.handleInputOnChange, 1000));
    }

    _bindEvents() {
        this.btnPlugincontrolRef.addEventListener('click', this._handlerBtnPlugin.bind(this))
        this.handleInputOnChange = this.handleInputOnChange.bind(this);
    }

    _handlerBtnPlugin() {
        if (!this.isActiv) {
            this.openSearch();
            return
        }
        this.closeSearch();
    }

    openSearch() {
        this.searchPluginRef.classList.remove('search-plugin_close')
        this.searchPluginRef.classList.add('search-plugin_open')
        this.isActiv = true;
    }
    closeSearch() {
        this.isActiv = false;
        this.searchPluginRef.classList.remove('search-plugin_open')
        this.searchPluginRef.classList.add('search-plugin_close')
        this.$elInput.value = "";
    }

    handleInputOnChange(event) {
        const { target } = event;
        const { value } = target;
        console.log(this.arrayList)
        this.arrayList.forEach(descriptionRef => this.searchInText(descriptionRef, value))
    }

    wrapSearchedText(text) {
        return `<span class="searched-word">${text}</span>`
    }

    searchInText(element, searchedText) {
        const regExp = new RegExp(`${searchedText}`, 'gi');
        const { textContent } = element;

        if (!searchedText) {
            element.innerHTML = textContent;
            return;
        }

        element.innerHTML = textContent.replace(regExp, this.wrapSearchedText(searchedText))
    }

}


