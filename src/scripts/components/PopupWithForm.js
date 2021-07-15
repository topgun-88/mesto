import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
    constructor (popupSelector, submitForm) {
        super(popupSelector);
        this._form = this._popup.querySelector('.form');
        this._submitForm = submitForm;
        this._submitBtn = this._form.querySelector('.form__submit')
    }

    getForm() {
        return this._form
    }

    _getInputValues() {
        const inputs = this._popup.querySelectorAll('.form__input')
        const inputValues = {}
        inputs.forEach(item => {
            inputValues[item.name] = item.value;
        });
        return inputValues;
    }

    close() {
        this._form.reset();
        super.close();
    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const inputValues = this._getInputValues()
            this._submitForm(inputValues);
        });
        super.setEventListeners();
    }
    
    setDeletedCard(deletedCard) {
        this._deletedCard = deletedCard
    }

    getDeletedCard() {
        return this._deletedCard
    }

    renderLoading (text) {
        this._submitBtn.textContent = text
    }
}