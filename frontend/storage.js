class Store {
  constructor(storageApi) {
    this.api = storageApi;
  }
  get() {
    return this.api.getItem(this.key);
  }
  set(value) {
    this.api.setItem(this.key, value);
  }
}

class UserStore extends Store {
  constructor(key) {
    super(sessionStorage);
    this.key = key;
  }
}

export default UserStore;