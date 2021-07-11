export default class Section {
    constructor(renderer, containerSelector) {
      this._renderer = renderer;       
      this._container = document.querySelector(containerSelector);
    }
  
    renderItems(items, myId) {
      items.reverse().forEach(item => this._renderer(item, myId === item.owner._id));
    }
  
    addItem(element) {
      this._container.prepend(element);
    }
  }