import { combineReducers } from 'redux';
import loadReducer from './loadReducer';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';

const RootReducer = combineReducers({
  loading: loadReducer,
  register: registerReducer,
  login: loginReducer,
})

export default RootReducer