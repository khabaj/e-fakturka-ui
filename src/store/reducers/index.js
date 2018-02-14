import { combineReducers } from 'redux';

import registrationReducer from './registration';

const rootReducer = combineReducers({
  registration: registrationReducer
});

export default rootReducer;