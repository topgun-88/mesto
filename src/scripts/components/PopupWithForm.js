import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
    constructor (popupSelector, submitForm) {
        super(popupSelector);
        this.form = this._popup.querySelector('.form');
        this._submitForm = submitForm;
        this.submitBtn = this.form.querySelector('.form__submit')
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
        this.form.reset();
        super.close();
    }

    setEventListeners() {
        this.form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const inputValues = this._getInputValues()
            this._submitForm(inputValues);
        });
        super.setEventListeners();
    }
}