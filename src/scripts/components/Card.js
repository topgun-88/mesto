export default class Card {
    constructor(data) {
        this._name = data.item.name;
        this._link = data.item.link;
        this._id = data.item._id;
        this._likes = data.item.likes;
        this._ownerId = data.item.owner._id
        this._cardSelector = data.cardSelector;
        this._handleLikeClick = data.handleLikeClick;
        this._handleCardClick = data.handleCardClick;
        this._handleCardDelete = data.handleCardDelete;
        this._myId = data.myId;        
    };

    getId() {
        return this._id
    }

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
        this._elementLike = this._element.querySelector('.element__like-icon');
        if (this._ownerId === this._myId) {this._element.querySelector('.element__del').classList.add('element__del_active')};
        this._setEventListeners();
        if (this.isLiked()){
          this.likeToggle()
        };
  
        return this._element;
    };
  
    _setEventListeners() {
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

    isLiked () {
        return this._likes.some((el) => {
            return el._id === this._myId;
        });
    };
  };