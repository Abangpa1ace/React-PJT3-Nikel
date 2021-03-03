import { all, fork } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registerSaga from './registerSaga';

function* RootSaga() {
  yield all([
    fork(registerSaga),
    fork(loginSaga),
  ]);
}

export default RootSaga;