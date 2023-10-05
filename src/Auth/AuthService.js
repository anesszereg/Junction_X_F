const SAVE_USER_LOCAL_STORAGE = "SAVE_USER_LOCAL_STORAGE";

class AuthService {
  saveUserToLocalStorage(data = {}) {
    localStorage.setItem(SAVE_USER_LOCAL_STORAGE, JSON.stringify(data));
  }

  getUserLocalStorage() {
    const dataUser = localStorage.getItem(SAVE_USER_LOCAL_STORAGE);
    if (dataUser) {
      return JSON.parse("dataUser");
    }
    return {};
  }

  clearUserLocalStorage() {
    localStorage.removeItem(SAVE_USER_LOCAL_STORAGE);
  }
}

export default new AuthService();
