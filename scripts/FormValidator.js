export default class FormValidator {
    constructor (config, form) {
        this._form = form;
        this._inputList = Array.from(this._form.querySelectorAll(config.inputSelector));
        this._buttonElement = this._form.querySelector(config.submitButtonSelector);
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
    }

    _showInputError (inputElement, errorElement) {
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
    };

    _hideInputError (inputElement, errorElement) {
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity (inputElement) {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, errorElement);
        } else {
            this._hideInputError(inputElement, errorElement);
        }
    };

    _hasInvalidInput () {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };

    _toggleButtonState () {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.disabled = true;
        } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    };

    _setEventListeners () {
        this._form.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    };

    refreshValidation () {
        this._inputList.forEach((inputElement) => {
            const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
            this._hideInputError(inputElement, errorElement);
        });
        this._toggleButtonState();
    }

    enableValidation = () => {
        this._setEventListeners();
        this.refreshValidation();
    };
}