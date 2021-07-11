export default class Api {
    getUserInfo() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-25/users/me', {
            headers: {
                authorization: 'be41d79c-6f8b-46b4-9ccd-48aa68517c8f'
            }
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(res.status);
        });
    };

    getCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-25/cards', {
            headers: {
                authorization: 'be41d79c-6f8b-46b4-9ccd-48aa68517c8f'
            }
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(res.status);
        });
    };

    setUserInfo(data) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-25/users/me', {
            method: 'PATCH',
            headers: {
                authorization: 'be41d79c-6f8b-46b4-9ccd-48aa68517c8f',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(res.status);
        });
    };

    setCard(data) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-25/cards', {
            method: 'POST',
            headers: {
                authorization: 'be41d79c-6f8b-46b4-9ccd-48aa68517c8f',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(res.status);
        });
    };

    setAvatar(link) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-25/users/me/avatar', {
            method: 'PATCH',
            headers: {
                authorization: 'be41d79c-6f8b-46b4-9ccd-48aa68517c8f',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(link)
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(res.status);
        });
    };
    deleteCard(id) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-25/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: 'be41d79c-6f8b-46b4-9ccd-48aa68517c8f'
              },
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(res.status);
        });
    };

    toggleLike(isAdd, id) {
        let currentMethod = 'PUT'
        if (isAdd) {currentMethod = 'DELETE'}
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-25/cards/likes/${id}`, {
            method: currentMethod,
            headers: {
                authorization: 'be41d79c-6f8b-46b4-9ccd-48aa68517c8f'
              },
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(res.status);
        });
    };
}