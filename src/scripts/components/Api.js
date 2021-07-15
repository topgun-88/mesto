export default class Api {
    constructor(data) {
        this.adress = data.adress;
        this.cohortId = data.cohortId;
        this.token = data.token;
    }

    _getResponseData(res) {
        if (res.ok) { 
            return res.json(); 
        }
        return Promise.reject(res.status); 
    }

    getUserInfo() {
        return fetch(`${this.adress}${this.cohortId}/users/me`, {
            headers: {
                authorization: this.token
            }
        })
        .then((res) => {
            return this._getResponseData(res)
        });
    };

    getCards() {
        return fetch(`${this.adress}${this.cohortId}/cards`, {
            headers: {
                authorization: this.token
            }
        })
        .then((res) => {
            return this._getResponseData(res)
        });
    };

    setUserInfo(data) {
        return fetch(`${this.adress}${this.cohortId}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
        .then((res) => {
            return this._getResponseData(res)
        });
    };

    setCard(data) {
        return fetch(`${this.adress}${this.cohortId}/cards`, {
            method: 'POST',
            headers: {
                authorization: this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((res) => {
            return this._getResponseData(res)
        });
    };

    setAvatar(link) {
        return fetch(`${this.adress}${this.cohortId}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(link)
        })
        .then((res) => {
            return this._getResponseData(res)
        });
    };
    deleteCard(id) {
        return fetch(`${this.adress}${this.cohortId}/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this.token
              },
        })
        .then((res) => {
            return this._getResponseData(res)
        });
    };

    toggleLike(isAdd, id) {
        let currentMethod = 'PUT'
        if (isAdd) {currentMethod = 'DELETE'}
        return fetch(`${this.adress}${this.cohortId}/cards/likes/${id}`, {
            method: currentMethod,
            headers: {
                authorization: this.token
              },
        })
        .then((res) => {
            return this._getResponseData(res)
        });
    };
}