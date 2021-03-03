import { combineReducers } from 'redux';
import authorReducer from './authorReducer';
import loadingReducer from './loadingReducer';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';

const RootReducer = combineReducers({
  loading: loadingReducer,
  register: registerReducer,
  login: loginReducer,
  author: authorReducer,
})

export default RootReducer