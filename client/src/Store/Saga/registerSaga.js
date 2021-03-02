import { call, put, takeEvery } from "redux-saga/effects";
import axios from 'axios';
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../Action/registerAction';
import { REGISTER_API } from '../../Data/config';

function registerApi() {
  return axios.post(REGISTER_API);
}

function* registerResponse(action) {
  try {
    yield call(registerApi);
    yield put ({
      type: REGISTER_SUCCESS,
    })
  }
  catch(err) {
    yield put ({
      type: REGISTER_FAILURE,
      message: action.err,
    })
  }
}

export default function* registerSaga() {
  yield takeEvery(REGISTER_REQUEST, registerResponse);
}