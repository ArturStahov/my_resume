export class SearchPlagin {
    constructor({ btnPluginSelector, searchPluginSelector }) {
        this.btnPlugincontrolRef = document.querySelector(btnPluginSelector);
        this.searchPluginRef = document.querySelector(searchPluginSelector);
        this._bindEvents();
        this.isActiv = false;
    }

    _bindEvents() {
        this.btnPlugincontrolRef.addEventListener('click', this._handlerBtnPlugin.bind(this))
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
    }


}