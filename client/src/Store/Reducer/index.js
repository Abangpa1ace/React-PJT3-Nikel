import { combineReducers } from 'redux';
import itemListReducer from './itemListReducer';
import loadReducer from './loadReducer';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';

const RootReducer = combineReducers({
  loading: loadReducer,
  register: registerReducer,
  login: loginReducer,
  itemList: itemListReducer,
})

export default RootReducer