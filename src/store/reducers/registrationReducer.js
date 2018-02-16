import { actionTypes } from "../actions/actionTypes";
import { updateObject } from './../utility';

const initialState = {
  loading: false,
  error: null,
  registrationSuccess: false
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTRATION_REQUEST:
      return updateObject(state, { loading: true, error: null })
    case actionTypes.REGISTRATION_SUCCESS:
      return updateObject(state, { loading: false, registrationSuccess: true })
    case actionTypes.REGISTRATION_FAIL:
      return updateObject(state, { loading: false, error: action.error })
    default:
      return state;
  }
};

export default registrationReducer;