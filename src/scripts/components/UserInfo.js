export default class UserInfo {
    constructor(values) {
        this._name = document.querySelector(values.nameSelector);
        this._about = document.querySelector(values.aboutSelector);
        this._avatar = document.querySelector(values.avatarSelector);
    }

    getUserInfo() {
        return {name: this._name.textContent, about: this._about.textContent};
    };

    setUserInfo(item) {
        this._name.textContent = item.name;
        this._about.textContent = item.about;
        this._id = item._id;
        if (item.avatar) {
            this._avatar.src = item.avatar;
        }
    }

    getId() {
        return this._id
    }
}