const popupFormEdit = document.querySelector('#popupEditForm');
const formEdit = document.querySelector('#popupEditForm');
const popupFormEditOpenBtn = document.querySelector('.profile__edit-btn');
const popupFormEditCloseBtn = formEdit.querySelector('.popup__close');

const formEditName = formEdit.querySelector('#profile-name');
const profileName = document.querySelector('.profile__name');

const formEditVocation = document.querySelector('#profile-vocation');
const profileVocation = document.querySelector('.profile__vocation');

const popupFormAdd = document.querySelector('#popupAddForm');
const formAdd = document.querySelector('#popupAddForm');
const popupFormAddOpenBtn = document.querySelector('.profile__add-btn');
const popupFormAddCloseBtn = formAdd.querySelector('.popup__close');

const formAddElementName = formAdd.querySelector('#element-name');
const formAddElementLink = formAdd.querySelector('#element-link');

const popupElementImage = document.querySelector('#popupElementImage');
const popupElementImageTitle = popupElementImage.querySelector('.popup__element-title');
const popupElementImageCloseBtn = popupElementImage.querySelector('.popup__close');
const elementlImage = popupElementImage.querySelector('.popup__element-image');

const elementsContainer = document.querySelector('.elements')

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

popupFormEditOpenBtn.addEventListener('click', openPopupFormEdit);
popupFormEditCloseBtn.addEventListener('click', closePopupFormEdit);
formEdit.addEventListener('submit', submitFromEdit);

popupFormAddOpenBtn.addEventListener('click', openPopupFormAdd);
popupFormAddCloseBtn.addEventListener('click', closePopupFormAdd);
formAdd.addEventListener('submit', submitFromAdd);

popupElementImageCloseBtn.addEventListener('click', closePopupElementImage);

function showPopup (obj) {
  obj.classList.add('popup_open');
};

function hidePopup (obj) {
  obj.classList.remove('popup_open');
};

function openPopupFormEdit () {
  formEditName.value = profileName.textContent;
  formEditVocation.value = profileVocation.textContent;
  showPopup(popupFormEdit);
};

function closePopupFormEdit () {
  formEditName.value = '';
  formEditVocation.value = '';
  hidePopup(popupFormEdit);
};

function submitFromEdit (evt) {
  evt.preventDefault();
  profileName.textContent = formEditName.value;
  profileVocation.textContent = formEditVocation.value;
  closePopupFormEdit()
};


function openPopupFormAdd () {
  showPopup(popupFormAdd);
};

function closePopupFormAdd () {
  formAddElementName.value = '';
  formAddElementLink.value = '';
  hidePopup(popupFormAdd);
;}

function submitFromAdd (evt) {
  evt.preventDefault();
  crateNewElement (formAddElementName.value, formAddElementLink.value);
  closePopupFormAdd();
};


function closePopupElementImage () {
  elementlImage.src = '';
  elementlImage.alt = '';
  hidePopup(popupElementImage);
};


function createNewElement (name, link) {
  const templElement = document.querySelector('#templElement').content;
  const newElement = templElement.querySelector('.element').cloneNode(true);
  
  const newElementName = newElement.querySelector('.element__title');
  newElementName.textContent = name

  const newElementImage = newElement.querySelector('.element__image');
  newElementImage.src = link;
  newElementImage.alt = name;
  
  const likeBtn = newElement.querySelector('.element__like');
  likeBtn.addEventListener('click', evt => evt.target.classList.toggle('element__like_active'));

  const delBtn = newElement.querySelector('.element__del');
  delBtn.addEventListener('click', () => newElement.remove());

  const imgBtn = newElement.querySelector('.element__image');
  imgBtn.addEventListener('click', () => {
    elementlImage.src = link;
    elementlImage.alt = name;
    popupElementImageTitle.textContent = name;
    showPopup(popupElementImage);
  });
  return newElement;
};

initialCards.forEach (el => elementsContainer.prepend(createNewElement(el.name, el.link)));