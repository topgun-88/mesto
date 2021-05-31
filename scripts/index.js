import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { showPopup, hidePopup } from './utils/utils.js';
import { popupFormEdit, formEdit, popupFormEditOpenBtn, popupFormEditCloseBtn,
        formEditName, profileName, formEditVocation, profileVocation,
        popupFormAdd, formAdd, popupFormAddOpenBtn, popupFormAddCloseBtn,
        formAddElementName, formAddElementLink,
        popupElementImage, popupElementImageCloseBtn, elementlImage, elementsContainer,
        initialCards, validationConfig } from './utils/constants.js';

popupFormEditOpenBtn.addEventListener('click', openPopupFormEdit);
popupFormEditCloseBtn.addEventListener('click', closePopupFormEdit);
formEdit.addEventListener('submit', submitFromEdit);

popupFormAddOpenBtn.addEventListener('click', openPopupFormAdd);
popupFormAddCloseBtn.addEventListener('click', closePopupFormAdd);
formAdd.addEventListener('submit', submitFromAdd);

popupElementImageCloseBtn.addEventListener('click', closePopupElementImage);

function openPopupFormEdit () {
  formEditName.value = profileName.textContent;
  formEditVocation.value = profileVocation.textContent;  
  formEditValidator.refreshValidation()
  showPopup(popupFormEdit);
};

function closePopupFormEdit () {
  hidePopup(popupFormEdit);
};

function submitFromEdit (evt) {
  evt.preventDefault();
  profileName.textContent = formEditName.value;
  profileVocation.textContent = formEditVocation.value;
  closePopupFormEdit()
};

function openPopupFormAdd () {
  formAdd.reset();
  /* не могу делать ресет в closePopupForm... т.к. есть еще hidePopupOnEsc и hidePopupByOverlayClick */
  formAddValidator.refreshValidation()
  showPopup(popupFormAdd);
};

function closePopupFormAdd () {
  hidePopup(popupFormAdd);
;}

function addNewCard (item, cardSelector, elementsContainer) {
	const card = new Card(item, cardSelector);
	const cardElement = card.generateCard();
	elementsContainer.prepend(cardElement);
}

function submitFromAdd (evt) {
  evt.preventDefault();
  addNewCard ({name: formAddElementName.value, link: formAddElementLink.value}, '#templElement', elementsContainer)
  closePopupFormAdd();
};

function closePopupElementImage () {
  elementlImage.src = '';
  elementlImage.alt = '';
  hidePopup(popupElementImage);
};

initialCards.forEach((item) => {
  addNewCard (item, '#templElement', elementsContainer)
});

const formEditValidator = new FormValidator(validationConfig, formEdit)
formEditValidator.enableValidation()
const formAddValidator = new FormValidator(validationConfig, formAdd)
formAddValidator.enableValidation()