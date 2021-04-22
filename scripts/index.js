let popup = document.querySelector('.popup');

let inputName = document.querySelector('#profile-name');
let profileName = document.querySelector('.profile__name');

let inputVocation = document.querySelector('#profile-vocation');
let profileVocation = document.querySelector('.profile__vocation');

function popupOpen () {
    popup.classList.add('popup_opened_open')
    inputName.value = profileName.textContent
    inputVocation.value = profileVocation.textContent
};

function popupClose (evt) {
    evt.preventDefault()
    popup.classList.remove('popup_opened_open')
    inputName.value = ''    
    inputVocation.value = ''
};

function popupSave (evt) {
    evt.preventDefault()
    popup.classList.remove('popup_opened_open')
    profileName.textContent = inputName.value
    profileVocation.textContent = inputVocation.value
    inputName.value = ''    
    inputVocation.value = ''
};

let editBtn = document.querySelector('.profile__edit-btn');
editBtn.addEventListener('click', popupOpen);

let closeBtn = document.querySelector('.popup__close');
closeBtn.addEventListener('click', popupClose);

let saveBtn = document.querySelector('.popup__save-btn');
saveBtn.addEventListener('click', popupSave);