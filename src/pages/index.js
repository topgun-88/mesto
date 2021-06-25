import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js'
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import FormValidator from '../scripts/components/FormValidator.js';
import UserInfo from '../scripts/components/UserInfo.js';
import { popupFormEditOpenBtn, popupFormAddOpenBtn,
        formEditName, formEditVocation,
        containerSelector, cardSelector,
        initialCards, validationConfig } from '../scripts/utils/constants.js';
import './index.css';

popupFormEditOpenBtn.addEventListener('click', openPopupFormEdit);
popupFormAddOpenBtn.addEventListener('click', openPopupFormAdd);

function openPopupFormEdit () {
  const profileValues = userInfo.getUserInfo();
  formEditName.value = profileValues.name;
  formEditVocation.value = profileValues.vocation;
  formEditValidator.refreshValidation();
  popupFormProfile.open();
};

function openPopupFormAdd () {
  formAddValidator.refreshValidation()
  popupFormAddPhoto.open();
};

function createCard(item) {  
  const card =  new Card(item, cardSelector, () => {
    popupWithImage.open(item.link, item.name);
  })
  const cardElement = card.generateCard();
  return cardElement
};

function renderCard(item, list) {
  const newCard = createCard(item);
  list.addItem(newCard);
};

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    renderCard(item, cardList);
    },
  },
  containerSelector
);
cardList.renderItems();

const popupWithImage = new PopupWithImage('#popupElementImage')
popupWithImage.setEventListeners()

const popupFormProfile = new PopupWithForm('#popupEditForm', (inputValues) => {
  userInfo.setUserInfo({name: inputValues.name, vocation:inputValues.vocation});  
  popupFormProfile.close();
})
popupFormProfile.setEventListeners()

const popupFormAddPhoto = new PopupWithForm('#popupAddForm', (inputValues) => {
  renderCard(inputValues, cardList);
  popupFormAddPhoto.close();
})
popupFormAddPhoto.setEventListeners()

const formEditValidator = new FormValidator(validationConfig, popupFormProfile.form)
formEditValidator.enableValidation()

const formAddValidator = new FormValidator(validationConfig, popupFormAddPhoto.form)
formAddValidator.enableValidation()

const userInfo = new UserInfo({nameSelector: '.profile__name', vocationSelector: '.profile__vocation'})