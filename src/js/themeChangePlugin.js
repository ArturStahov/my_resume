export class ThemeChangePlugin {
    constructor({ btnSelector }) {
        this.themeSettings = {
            theme: 'DARK'
        }
        this.btnRef = document.querySelector(btnSelector);
        this.arrayList = Array.from(document.querySelectorAll('p'));
        this.bodyRef = document.querySelector('[data-type="page-body"]')
        this.headerRef = this.bodyRef.querySelector('[data-type="page-header"]')
        this.sidebarRef = this.bodyRef.querySelector('[data-type="sidebar"]')
        this.isActive = true;
        this._loadTheme()
        this._bindEvent();
    }

    _bindEvent() {
        this.btnRef.addEventListener('click', this._handlerBtn.bind(this))
    }

    _handlerBtn(event) {
        if (!this.isActive) {
            this._darkTheme()
            return
        }
        this._lightTheme()
    }

    _darkTheme() {
        this.bodyRef.classList.remove('light-theme')
        this.bodyRef.classList.add('dark-theme')
        this.headerRef.classList.remove('light-theme')
        this.headerRef.classList.add('dark-theme')
        this.sidebarRef.classList.remove('light-theme-sidebar')
        this.sidebarRef.classList.add('dark-theme-sidebar')


        this.arrayList.forEach(elem => {
            elem.classList.remove('light-theme-text')
            elem.classList.add('dark-theme-text')
        })
        this.themeSettings.theme = 'DARK'
        this.isActive = true;
        this._saveTheme()
    }

    _lightTheme() {
        this.bodyRef.classList.remove('dark-theme')
        this.bodyRef.classList.add('light-theme')
        this.headerRef.classList.remove('dark-theme')
        this.headerRef.classList.add('light-theme')
        this.sidebarRef.classList.remove('dark-theme-sidebar')
        this.sidebarRef.classList.add('light-theme-sidebar')
        this.arrayList.forEach(elem => {
            elem.classList.remove('dark-theme-text')
            elem.classList.add('light-theme-text')
        })
        this.themeSettings.theme = 'LIGHT'
        this.isActive = false;
        this._saveTheme()
    }

    _saveTheme() {
        localStorage.setItem('themeSettings', JSON.stringify(this.themeSettings))
    }

    _loadTheme() {
        if (localStorage.getItem('themeSettings')) {
            const loadTheme = JSON.parse(localStorage.getItem('themeSettings'));
            (loadTheme.theme === 'DARK')
                ? this._darkTheme()
                : this._lightTheme()
        }
    }
}