export default class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    };
  
    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);

        return cardElement;
    };
  
    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__title').textContent = this._name;
        this._elementImage = this._element.querySelector('.element__image')
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;  
        this._setEventListeners();
  
        return this._element;
    };
  
    _setEventListeners() {
        this._elementLike = this._element.querySelector('.element__like');
        this._elementLike.addEventListener('click', () => {
            this._handleLikeClick();
        });
        this._element.querySelector('.element__del').addEventListener('click', () => {
            this._handleDeleteClick();
        });
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleCardClick();
        });
    };

    /* _handleCardClick() {
        popupWithImage.open(this._link, this._name);
    }; */
  
    _handleLikeClick() {
        this._elementLike.classList.toggle('element__like_active');
    };

    _handleDeleteClick() {
        this._element.remove();
        this._element = null;
    };
  };