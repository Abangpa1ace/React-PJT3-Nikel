import { all, fork } from 'redux-saga/effects';
import itemListSaga from './itemListSaga';
import loginSaga from './loginSaga';
import registerSaga from './registerSaga';
import detailSaga from './detailSaga';

function* RootSaga() {
  yield all([
    fork(registerSaga),
    fork(loginSaga),
    fork(itemListSaga),
    fork(detailSaga),
  ]);
}

export default RootSaga;