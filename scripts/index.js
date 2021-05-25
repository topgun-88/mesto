popupFormEditOpenBtn.addEventListener('click', openPopupFormEdit);
popupFormEditCloseBtn.addEventListener('click', closePopupFormEdit);
formEdit.addEventListener('submit', submitFromEdit);

popupFormAddOpenBtn.addEventListener('click', openPopupFormAdd);
popupFormAddCloseBtn.addEventListener('click', closePopupFormAdd);
formAdd.addEventListener('submit', submitFromAdd);

popupElementImageCloseBtn.addEventListener('click', closePopupElementImage);

function hidePopupOnEsc (evt) {
  const openedPopup = document.querySelector('.popup_open')
  if (evt.key === 'Escape') {hidePopup(openedPopup)}
};

function hidePopupByOverlayClick (evt) {
  if (evt.target.classList.contains('popup_open')) {hidePopup(evt.target)}
};

function showPopup (obj) {
  obj.classList.add('popup_open');
  obj.addEventListener('mousedown', hidePopupByOverlayClick);
  document.addEventListener('keydown', hidePopupOnEsc);
  
  const inputList = Array.from(obj.querySelectorAll('.form__input'));
  const buttonElement = obj.querySelector('.form__submit');

  toggleButtonState(inputList, buttonElement, config);

  const currentForm = obj.querySelector('.form')
  inputList.forEach((inputElement) => {
    hideInputError(currentForm, inputElement, config)
  });
  /* если скрыть форму с ошибками, то при последующем открытии 
  останутся спаны на пустых полях, по этому оставил скрытие 
  ошибок при открытии формы */
};

function hidePopup (obj) {
  obj.classList.remove('popup_open');
  obj.removeEventListener('click', hidePopupByOverlayClick);
  document.removeEventListener('keydown', hidePopupOnEsc);
};

function openPopupFormEdit () {
  formEditName.value = profileName.textContent;
  formEditVocation.value = profileVocation.textContent;
  showPopup(popupFormEdit);
};

function closePopupFormEdit () {
  hidePopup(popupFormEdit);
  formEditName.value = '';
  formEditVocation.value = '';
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
  elementsContainer.prepend(createNewElement (formAddElementName.value, formAddElementLink.value));
  closePopupFormAdd();
};


function closePopupElementImage () {
  elementlImage.src = '';
  elementlImage.alt = '';
  hidePopup(popupElementImage);
};


function createNewElement (name, link) {
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