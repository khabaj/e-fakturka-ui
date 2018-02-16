import axios from '../axios';
import { ACCESS_TOKEN } from './../utils/constants.js';

class AuthenticationService {

  static authenticate({ login, password }) {
    const authData = {
      username: login,
      password: password
    };

    return axios.post('/auth/token', authData)
      .then(response => {
        this.saveTokenInLocalStorage(response.data.accessToken, response.data.tokenType);
      });
  }

  static saveTokenInLocalStorage(accessToken, tokenType) {
    localStorage.setItem(ACCESS_TOKEN, tokenType + ' ' + accessToken);
  }

  static readTokenFromLocalStorage() {
    localStorage.getItem(ACCESS_TOKEN);
  }
}

export default AuthenticationService;