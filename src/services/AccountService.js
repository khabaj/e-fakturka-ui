import axios from '../axios';

class AccountService {

  static registerNewAccount(registrationData) {
    return axios.post('/accounts', registrationData)
      .then(response => {
        return response.status === 201
      });
  }
}

export default AccountService;