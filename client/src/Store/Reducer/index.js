import { combineReducers } from 'redux';
import itemListReducer from './itemListReducer';
import authorReducer from './authorReducer';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import cartReducer from './cartReducer';
import detailReducer from './detailReducer';

const RootReducer = combineReducers({
  author: authorReducer,
  register: registerReducer,
  login: loginReducer,
  itemList: itemListReducer,
  cart: cartReducer,
  detail: detailReducer,
})

export default RootReducer