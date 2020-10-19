import './scss/main.scss';
import { mobileNavModal } from './js/mobile-nav-modal.js'
import { SelectItemPlugin } from './js/selectItemPlugin.js'



const mobileNavOptions = {
    pageNavClass: '[data-type="nav"]',
    buttonNavClass: '#menu-toggle',
    modalwindowClass: '[data-type="modalwindow-nav"]'
}
const mobileNav = new mobileNavModal(mobileNavOptions);

const selectPluginOptions = {
    mobileNavClass: '[data-type="modalwindow-nav"]',
    defaultNavClass: '[data-type="default-window-nav"]'
}

const selectItemPlugin = new SelectItemPlugin(selectPluginOptions);