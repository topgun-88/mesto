const formEdit = document.querySelector('#popupEditForm').querySelector('.form');
export const formEditName = formEdit.querySelector('#profile-name');
export const formEditVocation = formEdit.querySelector('#profile-vocation');

export const popupFormEditOpenBtn = document.querySelector('.profile__edit-btn');
export const popupFormAddOpenBtn = document.querySelector('.profile__add-btn');
export const popupFormAvatarOpenBtn = document.querySelector('.profile__avatar-btn');

export const containerSelector = '.elements';

export const cardSelector = '#templElement';
  export const validationConfig = {
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__input_invalid',
};