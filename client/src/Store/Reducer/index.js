import { combineReducers } from 'redux';
import loadReducer from './loadReducer';

const RootReducer = combineReducers({
  loading: loadReducer,

})

export default RootReducer