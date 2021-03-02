import { call, put, takeEvery } from "redux-saga/effects";
import axios from 'axios';
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../Action/registerAction';
import { REGISTER_API } from '../../Data/config';

function registerApi(data) {
  return axios.post(REGISTER_API, data);
}

function* registerResponse(action) {
  try {
    const result = yield call(registerApi, action.data);
    yield put ({
      type: REGISTER_SUCCESS,
    })
    console.log(result);
  }
  catch(err) {
    console.log(err.response.data.message);
    yield put ({
      type: REGISTER_FAILURE,
      errorMsg: err.response.data.message,
    })
  }
}

export default function* registerSaga() {
  yield takeEvery(REGISTER_REQUEST, registerResponse);
}
