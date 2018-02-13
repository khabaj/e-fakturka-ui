import axios from '../axios';

class AccountService {
  registerNewAccount(registrationData) {
    console.log(registrationData);

    axios.post('/accounts', registrationData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default AccountService;