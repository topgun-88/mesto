import {showPopup} from './utils/utils.js';
import {elementlImage, popupElementImageTitle} from './utils/constants.js';
export default class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }
  
    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);

        return cardElement;
    }
  
    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;  
        this._setEventListeners();
  
        return this._element;
    }
  
    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._elementLike();
        });
        this._element.querySelector('.element__del').addEventListener('click', () => {
            this._elementDel();
        });
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._elementShow();
        });
    }
  
    _elementLike() {
        this._element.querySelector('.element__like').classList.toggle('element__like_active');
    }
    _elementDel() {
        this._element.remove();
    }
    _elementShow() {
        elementlImage.src = this._link;
        elementlImage.alt = this._name;
        popupElementImageTitle.textContent = this._name;
        showPopup(popupElementImage);
    }
  }  