import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './Reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  RootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(/* Saga */);

export default store;