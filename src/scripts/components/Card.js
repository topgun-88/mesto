export default class Card {
    constructor(data, cardSelector, handleCardClick, handleCardDelete, myCard, handleLikeClick) {
        this._name = data.name;
        this._link = data.link;
        this.id = data._id;
        this._likes = data.likes;
        this._cardSelector = cardSelector;
        this._handleLikeClick = handleLikeClick;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
        this._myCard = myCard;
        
    };
    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);

        return cardElement;
    };

    updateLikeCount (likes) {
        this._element.querySelector('.element__likes-count').textContent = likes.length;
        this._likes = likes
    }
  
    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__title').textContent = this._name;        
        this.updateLikeCount(this._likes);
        this._elementImage = this._element.querySelector('.element__image');
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        if (this._myCard) {this._element.querySelector('.element__del').classList.add('element__del_active')};
        this._setEventListeners();
  
        return this._element;
    };
  
    _setEventListeners() {
        this._elementLike = this._element.querySelector('.element__like-icon');
        this._elementLike.addEventListener('click', () => {
            this._handleLikeClick();
        });
        this._element.querySelector('.element__del').addEventListener('click', () => {
            this._handleCardDelete(this);
        });
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleCardClick();
        });
    };

    likeToggle() {
        this._elementLike.classList.toggle('element__like_active');
    };

    deleteCard() {
        this._element.remove();
        this._element = null;
    };

    isLiked (myId) {
        return this._likes.some(function(el) {
            return el._id === myId;
        });
    };
  };