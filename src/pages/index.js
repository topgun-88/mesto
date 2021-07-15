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
  popupFormProfile.renderLoading("Сохранение...")
  api.setUserInfo({name: inputValues.name, about:inputValues.about}).then((res) => {
    userInfo.setUserInfo(res);
  }).then((res) => {popupFormProfile.close()})
  .catch((err) => console.log(err))
  .finally(() => {
    popupFormProfile.renderLoading("Сохранить")
  });
});
popupFormProfile.setEventListeners();
const formEditValidator = new FormValidator(validationConfig, popupFormProfile.getForm());
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
  popupFormAvatar.renderLoading("Сохранение...");
  api.setAvatar({avatar: inputValues.link}).then((res) => {
    userInfo.setUserInfo(res)
  }).then((res) => {popupFormAvatar.close()})
  .catch((err) => console.log(err))
  .finally(() => {
    popupFormAvatar.renderLoading("Сохранить")
  });
});
popupFormAvatar.setEventListeners();
const formAvatarValidator = new FormValidator(validationConfig, popupFormAvatar.getForm());
formAvatarValidator.enableValidation();
/* ______AVATAR_________ */
/* ______CARD_________ */
popupFormAddOpenBtn.addEventListener('click', openPopupFormAdd);
function openPopupFormAdd () {
  formAddValidator.refreshValidation()
  popupFormAddPhoto.open();
};
  
function createCard(item) {
  const card =  new Card({
    item: item, 
    cardSelector: cardSelector, 
    handleCardClick: () => {
      popupWithImage.open(item.link, item.name);
    }, 
    handleCardDelete: (item) => {
      popupConfirm.setDeletedCard(item);
      popupConfirm.open()
    }, 
    myId: userInfo.getId(), 
    handleLikeClick: () => {
      api.toggleLike(card.isLiked(), card.getId()).then((res) => {
        card.updateLikeCount(res.likes)
      }).then((res) => {
        card.likeToggle()
      }).catch((err) => console.log(err))
    }
  });
  const cardElement = card.generateCard();
  return cardElement
};

function renderCard(item, list) {
  const newCard = createCard(item);
  list.addItem(newCard);
};

const popupFormAddPhoto = new PopupWithForm('#popupAddForm', (inputValues) => {
  popupFormAddPhoto.renderLoading("Сохранение...");
  api.setCard(inputValues).then((res) => {
    renderCard(res, cardList);
  }).then((res) => {popupFormAddPhoto.close()})
  .catch((err) => console.log(err))
  .finally(() => {
    popupFormAddPhoto.renderLoading("Сохранить")
  });
});
popupFormAddPhoto.setEventListeners();
const formAddValidator = new FormValidator(validationConfig, popupFormAddPhoto.getForm());
formAddValidator.enableValidation();

const cardList = new Section(
  (item) => {
    renderCard(item, cardList);
  },
  containerSelector
);
/* ______CARD_________ */
/* ______CARD_DELETE_________ */
const popupConfirm = new PopupWithForm('#popupConfirm', () => {
  popupConfirm.renderLoading("Сохранение...");
  const deletedCard = popupConfirm.getDeletedCard()
  api.deleteCard(deletedCard.getId()).then((res) => {
    deletedCard.deleteCard();
  }).then((res) => {popupConfirm.close()})
  .catch((err) => console.log(err))
  .finally(() => {
    popupConfirm.renderLoading("Да")
  });
});
popupConfirm.setEventListeners();
/* ______CARD_DELETE_________ */
/* ______CARD_IMAGE_________ */
const popupWithImage = new PopupWithImage('#popupElementImage');
popupWithImage.setEventListeners();
/* ______CARD_IMAGE_________ */

const api = new Api({
  adress: 'https://mesto.nomoreparties.co/v1/', 
  token: 'be41d79c-6f8b-46b4-9ccd-48aa68517c8f', 
  cohortId: 'cohort-25'
});

Promise.all([api.getUserInfo(), api.getCards()])
  .then(([user, cards]) => {
    userInfo.setUserInfo(user);
    cardList.renderItems(cards);
  }).catch((err) => console.log(err));