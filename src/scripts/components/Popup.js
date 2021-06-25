export default class Popup {
    constructor (popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closeBtn = this._popup.querySelector('.popup__close');
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {this.close()}
    }

    _handleOverlayClickClose (evt) {
        if (evt.target.classList.contains('popup_open')) {this.close()};
    };

    open() {
        document.addEventListener('keydown', this._handleEscClose.bind(this));
        this._popup.classList.add('popup_open');
    }

    close() {
        document.removeEventListener('keydown', this._handleEscClose.bind(this));
        this._popup.classList.remove('popup_open');
    }

    setEventListeners () {
        this._popup.querySelector('.popup__close').addEventListener('click', this.close.bind(this));
        this._popup.addEventListener('mousedown', this._handleOverlayClickClose.bind(this));
    }
}