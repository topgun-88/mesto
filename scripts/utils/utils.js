export function hidePopupOnEsc (evt) {
    const openedPopup = document.querySelector('.popup_open')
    if (evt.key === 'Escape') {hidePopup(openedPopup)}
};

export function hidePopupByOverlayClick (evt) {
    if (evt.target.classList.contains('popup_open')) {hidePopup(evt.target)}
};

export function showPopup (obj) {
    obj.classList.add('popup_open');
    obj.addEventListener('mousedown', hidePopupByOverlayClick);
    document.addEventListener('keydown', hidePopupOnEsc);
};

export function hidePopup (obj) {
    obj.classList.remove('popup_open');
    obj.removeEventListener('click', hidePopupByOverlayClick);
    document.removeEventListener('keydown', hidePopupOnEsc);
    if (obj.querySelector('.form')) {
        obj.querySelector('.form').reset();
    }
};