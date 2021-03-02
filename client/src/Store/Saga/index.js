import { all, fork } from 'redux-saga/effects';
import registerSaga from './registerSaga';

function* RootSaga() {
  yield all([
    fork(registerSaga),
  ]);
}

export default RootSaga;