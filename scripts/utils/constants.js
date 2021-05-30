export const popupFormEdit = document.querySelector('#popupEditForm');
export const formEdit = popupFormEdit.querySelector('.form');
export const popupFormEditOpenBtn = document.querySelector('.profile__edit-btn');
export const popupFormEditCloseBtn = popupFormEdit.querySelector('.popup__close');

export const formEditName = formEdit.querySelector('#profile-name');
export const profileName = document.querySelector('.profile__name');

export const formEditVocation = formEdit.querySelector('#profile-vocation');
export const profileVocation = document.querySelector('.profile__vocation');

export const popupFormAdd = document.querySelector('#popupAddForm');
export const formAdd = popupFormAdd.querySelector('.form');
export const popupFormAddOpenBtn = document.querySelector('.profile__add-btn');
export const popupFormAddCloseBtn = popupFormAdd.querySelector('.popup__close');

export const formAddElementName = formAdd.querySelector('#element-name');
export const formAddElementLink = formAdd.querySelector('#element-link');

export const popupElementImage = document.querySelector('#popupElementImage');
export const popupElementImageTitle = popupElementImage.querySelector('.popup__element-title');
export const popupElementImageCloseBtn = popupElementImage.querySelector('.popup__close');
export const elementlImage = popupElementImage.querySelector('.popup__element-image');

export const elementsContainer = document.querySelector('.elements');

export const initialCards = [
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    }
  ];

  export const validationConfig = {
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__input_invalid',
};