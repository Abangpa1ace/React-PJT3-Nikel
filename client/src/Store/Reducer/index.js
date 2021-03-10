import { combineReducers } from 'redux';
import itemListReducer from './itemListReducer';
import authorReducer from './authorReducer';
import loadingReducer from './loadingReducer';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import cartReducer from './cartReducer';

const RootReducer = combineReducers({
  loading: loadingReducer,
  register: registerReducer,
  login: loginReducer,
  itemList: itemListReducer,
  author: authorReducer,
  cart: cartReducer,
})

export default RootReducer