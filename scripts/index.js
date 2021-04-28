const popup = document.querySelector('.popup');
const popupElImage = document.querySelector('.popup__element-image');

const inputName = document.querySelector('#profile-name');
const profileName = document.querySelector('.profile__name');

const inputVocation = document.querySelector('#profile-vocation');
const profileVocation = document.querySelector('.profile__vocation');

const inputElementName = document.querySelector('#element-name');
const inputElementLink = document.querySelector('#element-link');

const editBtn = document.querySelector('.profile__edit-btn');
const addBtn = document.querySelector('.profile__add-btn');
const closeBtn = document.querySelector('.popup__close');
const editForm = document.querySelector('.popup__edit-form');
const addForm = document.querySelector('.popup__add-form');

const elements = document.querySelector('.elements')

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

editBtn.addEventListener('click',editFormOpen);
addBtn.addEventListener('click', addFormOpen);
closeBtn.addEventListener('click', popupClose);
editForm.addEventListener('submit', editFormSave);
addForm.addEventListener('submit', addFormSave);

function popupOpen () {
    popup.classList.add('popup_open');
};

function editFormOpen () {
    editForm.classList.add('popup_open')
    inputName.value = profileName.textContent;
    inputVocation.value = profileVocation.textContent;
    popupOpen()
}

function addFormOpen () {
    addForm.classList.add('popup_open')
    popupOpen()
}

function popupClose () {
    popup.classList.remove('popup_open')
    editForm.classList.remove('popup_open')
    addForm.classList.remove('popup_open')
    inputName.value = ''    
    inputVocation.value = ''
    inputElementName.value = ''
    inputElementLink.value = ''
};

function editFormSave (evt) {
    evt.preventDefault()
    profileName.textContent = inputName.value
    profileVocation.textContent = inputVocation.value
    popupClose()
};

function addFormSave (evt) {
    evt.preventDefault()
    newElement (inputElementName.value, inputElementLink.value)
    popupClose()
};
function newElement (name, link) {
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
        popupElImage.src = link;
        popupElImage.alt = name;
        popupOpen()
    });

    elements.prepend(newElement);
};

initialCards.forEach (el => newElement(el.name, el.link));