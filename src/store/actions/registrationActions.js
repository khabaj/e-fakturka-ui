import { actionTypes } from './actionTypes';
import AccountService from './../../services/AccountService';

const registrationStart = () => {
  return {
    type: actionTypes.REGISTRATION_REQUEST
  };
};

const registrationSuccess = () => {
  return {
    type: actionTypes.REGISTRATION_SUCCESS
  };
};

const registrationFail = (error) => {
  return {
    type: actionTypes.REGISTRATION_FAIL,
    error: error
  };
};

export const register = (registrationData) => {
  return dispatch => {
    dispatch(registrationStart());
    AccountService.registerNewAccount(registrationData)
      .then(() => dispatch(registrationSuccess()))
      .catch(() => dispatch(registrationFail("Rejestracja nie powiodła się.")));
  }
}