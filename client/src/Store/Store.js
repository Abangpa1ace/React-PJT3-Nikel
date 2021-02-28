import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './Reducer';
import RootSaga from './Saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  RootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(RootSaga);

export default store;