import { combineReducers } from 'redux';

import registrationReducer from './registrationReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  registration: registrationReducer,
  auth: authReducer
});

export default rootReducer;