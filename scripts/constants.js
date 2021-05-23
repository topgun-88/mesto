const popupFormEdit = document.querySelector('#popupEditForm');
const formEdit = popupFormEdit.querySelector('.form');
const popupFormEditOpenBtn = document.querySelector('.profile__edit-btn');
const popupFormEditCloseBtn = popupFormEdit.querySelector('.popup__close');

const formEditName = formEdit.querySelector('#profile-name');
const profileName = document.querySelector('.profile__name');

const formEditVocation = formEdit.querySelector('#profile-vocation');
const profileVocation = document.querySelector('.profile__vocation');

const formEditSpans = Array.from(formEdit.querySelectorAll('.form__input-error'));

const popupFormAdd = document.querySelector('#popupAddForm');
const formAdd = popupFormAdd.querySelector('.form');
const popupFormAddOpenBtn = document.querySelector('.profile__add-btn');
const popupFormAddCloseBtn = popupFormAdd.querySelector('.popup__close');

const formAddElementName = formAdd.querySelector('#element-name');
const formAddElementLink = formAdd.querySelector('#element-link');

const formAddSpans = Array.from(formAdd.querySelectorAll('.form__input-error'));

const popupElementImage = document.querySelector('#popupElementImage');
const popupElementImageTitle = popupElementImage.querySelector('.popup__element-title');
const popupElementImageCloseBtn = popupElementImage.querySelector('.popup__close');
const elementlImage = popupElementImage.querySelector('.popup__element-image');

const elementsContainer = document.querySelector('.elements');

const templElement = document.querySelector('#templElement').content;

const initialCards = [
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

  const config = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__input_invalid',
  };