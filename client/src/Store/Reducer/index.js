import { combineReducers } from 'redux';
import loadReducer from './loadReducer';
import registerReducer from './registerReducer';

const RootReducer = combineReducers({
  loading: loadReducer,
  register: registerReducer,
})

export default RootReducer