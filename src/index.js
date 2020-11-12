import './scss/main.scss';
import { mobileNavModal } from './js/mobile-nav-modal.js'
import { SelectItemPlugin } from './js/selectItemPlugin.js'
import { SearchPlagin } from './js/search-plagin.js'
import { GalleryPlugin } from './js/gallery-plugin.js'
import { SendMessagePlugin } from './js/send-message-plugin.js'


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

const searchPluginOptions = {
    btnPluginSelector: '[data-type="search-button"]',
    searchPluginSelector: '[data-type="search-plugin"]',
    selectorInput: '[data-type="search-input"]'

}

const searchPlugin = new SearchPlagin(searchPluginOptions);

const galleryPluginOptions = {
    selectorGallery: '[data-type="gallery"]',
}
const galleryPlugin = new GalleryPlugin(galleryPluginOptions)


const sendMessagePluginOptions = {
    selectorForm: '[data-type="form-message"]',
    selectorResult: '[data-type="message-result"]'
}
const sendMessagePlugin = new SendMessagePlugin(sendMessagePluginOptions)
