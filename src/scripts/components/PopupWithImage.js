import Popup from './Popup.js'
export default class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super(popupSelector)
        this.elementlImage = this._popup.querySelector('.popup__element-image');
    }    

    open(imageLink, imageName) {
        this.elementlImage.src = imageLink;
        this.elementlImage.alt = imageName;
        this._popup.querySelector('.popup__element-title').textContent = imageName;
        super.open()
    }
}