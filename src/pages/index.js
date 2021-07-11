import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js'
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import FormValidator from '../scripts/components/FormValidator.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api.js';
import { popupFormEditOpenBtn, popupFormAddOpenBtn, popupFormAvatarOpenBtn,
        formEditName, formEditVocation,
        containerSelector, cardSelector, validationConfig } from '../scripts/utils/constants.js';
import './index.css';

/* ______USER INFO_________ */
popupFormEditOpenBtn.addEventListener('click', openPopupFormEdit);
function openPopupFormEdit () {
  const profileValues = userInfo.getUserInfo();
  formEditName.value = profileValues.name;
  formEditVocation.value = profileValues.about;
  formEditValidator.refreshValidation();
  popupFormProfile.open();
};

const popupFormProfile = new PopupWithForm('#popupEditForm', (inputValues) => {
  popupFormProfile.submitBtn.textContent = "Сохранение..."
  api.setUserInfo({name: inputValues.name, about:inputValues.about}).then((res) => {
    userInfo.setUserInfo(res);
  }).then((res) => {popupFormProfile.close()})
  .catch((err) => console.log(err))
  .finally(() => {
    setTimeout(() => {popupFormProfile.submitBtn.textContent = "Сохранить"}, 1000)
  });
});
popupFormProfile.setEventListeners();
const formEditValidator = new FormValidator(validationConfig, popupFormProfile.form);
formEditValidator.enableValidation();

const userInfo = new UserInfo({nameSelector: '.profile__name', aboutSelector: '.profile__about', avatarSelector: '.profile__avatar'});
/* ______USER INFO_________ */
/* ______AVATAR_________ */
popupFormAvatarOpenBtn.addEventListener('click', openPopupFormAvatar);
function openPopupFormAvatar () {
  formAvatarValidator.refreshValidation()
  popupFormAvatar.open()
};

const popupFormAvatar = new PopupWithForm('#popupAvatarForm', (inputValues) => {
  popupFormAvatar.submitBtn.textContent = "Сохранение..."
  api.setAvatar({avatar: inputValues.link}).then((res) => {
    userInfo.setUserInfo(res)
  }).then((res) => {popupFormAvatar.close()})
  .catch((err) => console.log(err))
  .finally(() => {
    setTimeout(() => {popupFormAvatar.submitBtn.textContent = "Сохранить"}, 1000)
  });
});
popupFormAvatar.setEventListeners();
const formAvatarValidator = new FormValidator(validationConfig, popupFormAvatar.form);
formAvatarValidator.enableValidation();
/* ______AVATAR_________ */
/* ______CARD_________ */
popupFormAddOpenBtn.addEventListener('click', openPopupFormAdd);
function openPopupFormAdd () {
  formAddValidator.refreshValidation()
  popupFormAddPhoto.open();
};
  
function createCard(item, myCard) {
  const card =  new Card(item, cardSelector, () => {
    popupWithImage.open(item.link, item.name);
  }, (item) => {
      popupConfirm.card = item;
      popupConfirm.open()
    }, myCard, () => {
      api.toggleLike(card.isLiked(userInfo.id), card.id).then((res) => {
        card.updateLikeCount(res.likes)        
      }).then((res) => {
        card.likeToggle()
      }).catch((err) => console.log(err))
    });
  const cardElement = card.generateCard();
  if (card.isLiked(userInfo.id)){
    card.likeToggle()
  };
  return cardElement
};

function renderCard(item, list, myCard) {
  const newCard = createCard(item, myCard);
  list.addItem(newCard);
};

const popupFormAddPhoto = new PopupWithForm('#popupAddForm', (inputValues) => {
  popupFormAddPhoto.submitBtn.textContent = "Сохранение..."
  api.setCard(inputValues).then((res) => {
    renderCard(res, cardList, true);
  }).then((res) => {popupFormAddPhoto.close()})
  .catch((err) => console.log(err))
  .finally(() => {
    setTimeout(() => {popupFormAddPhoto.submitBtn.textContent = "Сохранить"}, 1000)
  });
});
popupFormAddPhoto.setEventListeners();
const formAddValidator = new FormValidator(validationConfig, popupFormAddPhoto.form);
formAddValidator.enableValidation();

const cardList = new Section(
  (item, myCard) => {
    renderCard(item, cardList, myCard);
  },
  containerSelector
);
/* ______CARD_________ */
/* ______CARD_DELETE_________ */
const popupConfirm = new PopupWithForm('#popupConfirm', () => {
  popupConfirm.submitBtn.textContent = "Сохранение..."
  api.deleteCard(popupConfirm.card.id).then((res) => {
    popupConfirm.card.deleteCard();
  }).then((res) => {popupConfirm.close()})
  .catch((err) => console.log(err))
  .finally(() => {
    setTimeout(() => {popupConfirm.submitBtn.textContent = "Да"}, 1000)
  });
});
popupConfirm.setEventListeners();
/* ______CARD_DELETE_________ */
/* ______CARD_IMAGE_________ */
const popupWithImage = new PopupWithImage('#popupElementImage');
popupWithImage.setEventListeners();
/* ______CARD_IMAGE_________ */

const api = new Api();

Promise.all([api.getUserInfo(), api.getCards()])
  .then(([user, cards]) => {
    userInfo.setUserInfo(user);
    cardList.renderItems(cards, user._id);
  }).catch((err) => console.log(err));