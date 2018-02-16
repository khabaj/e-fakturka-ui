import AuthenticationService from './../../services/AuthenticationService';
import { actionTypes } from './actionTypes';


const loginStart = () => {
  return {
    type: actionTypes.REGISTRATION_REQUEST
  };
};

const loginSuccess = () => {
  return {
    type: actionTypes.LOGIN_SUCCESS
  };
};

const loginFailed = () => {
  return {
    type: actionTypes.LOGIN_FAILED
  };
};

export const login = (loginData) => {
  return dispatch => {
    dispatch(loginStart());
    AuthenticationService.authenticate(loginData)
      .then(() => {
        dispatch(loginSuccess());
      })
      .catch(() => {
        dispatch(loginFailed());
      });
  };
};

export const checkAuthState = () => {
  
};