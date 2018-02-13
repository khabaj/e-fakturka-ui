import { actionTypes } from './actionTypes';
import AccountService from './../../services/AccountService';

const accountService = new AccountService();

const registrationStart = () => {
  return {
    type: actionTypes.REGISTRATION_REQUEST
  };
};

export const register = (registrationData) => {
  return dispatch => {
    dispatch(registrationStart());
    accountService.registerNewAccount(registrationData);
  }
}