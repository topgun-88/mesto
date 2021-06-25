const formEdit = document.querySelector('#popupEditForm').querySelector('.form');
export const formEditName = formEdit.querySelector('#profile-name');
export const formEditVocation = formEdit.querySelector('#profile-vocation');
/* export const profileName = document.querySelector('.profile__name');
export const profileVocation = document.querySelector('.profile__vocation'); */

export const popupFormEditOpenBtn = document.querySelector('.profile__edit-btn');
export const popupFormAddOpenBtn = document.querySelector('.profile__add-btn');

export const containerSelector = '.elements';
export const cardSelector = '#templElement';

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