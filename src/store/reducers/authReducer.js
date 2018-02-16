import { actionTypes } from "../actions/actionTypes";
import { updateObject } from './../utility';

const initialState = {
  loading: false,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
      return updateObject(state, { loading: true, error: null })
    case actionTypes.LOGIN_SUCCESS:
      return updateObject(state, { loading: false, isAuthenticated: true, error: null })
    case actionTypes.LOGIN_FAILED:
      return updateObject(state, { loading: false, isAuthenticated: false, error: action.error })
    default:
      return state;
  }
};

export default authReducer;