let popup = document.querySelector('.popup');

let inputName = document.querySelector('#profile-name');
let profileName = document.querySelector('.profile__name');

let inputVocation = document.querySelector('#profile-vocation');
let profileVocation = document.querySelector('.profile__vocation');

let editBtn = document.querySelector('.profile__edit-btn');
let closeBtn = document.querySelector('.popup__close');
let editForm = document.querySelector('.popup__edit-form');

function popupOpen () {
    popup.classList.add('popup_open')
    inputName.value = profileName.textContent
    inputVocation.value = profileVocation.textContent
};

function popupClose () {
    popup.classList.remove('popup_open')
    inputName.value = ''    
    inputVocation.value = ''
};

function popupSave (evt) {
    evt.preventDefault()
    profileName.textContent = inputName.value
    profileVocation.textContent = inputVocation.value
    popupClose()
};

editBtn.addEventListener('click', popupOpen);
closeBtn.addEventListener('click', popupClose);
editForm.addEventListener('submit', popupSave);