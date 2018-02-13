import { actionTypes } from "../actions/actionTypes";

const initialState = {
  loading: false
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTRATION_REQUEST:
      return { loading: true }
    default:
      return state;
  }
};

export default registrationReducer;