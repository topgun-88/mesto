export default class UserInfo {
    constructor(values) {
        this._name = document.querySelector(values.nameSelector);
        this._vocation = document.querySelector(values.vocationSelector);
    }

    getUserInfo() {
        return {name: this._name.textContent, vocation: this._vocation.textContent};
    };

    setUserInfo(item) {
        this._name.textContent = item.name;
        this._vocation.textContent = item.vocation;
    }
}