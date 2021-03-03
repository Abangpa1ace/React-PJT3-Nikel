import { call, put, takeEvery } from "redux-saga/effects";
import axios from 'axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../Action/loginAction';
import { LOGIN_API } from '../../Data/config';

function loginApi(data) {
  return axios.post(LOGIN_API, data);
}

function* loginResponse(action) {
  try {
    const result = yield call(loginApi, action.data);
    yield put ({
      type: LOGIN_SUCCESS,
    })
    console.log(result);
  }
  catch(err) {
    console.log(err.response.data.message);
    yield put ({
      type: LOGIN_FAILURE,
      errorMsg: err.response.data.message,
    })
  }
}

export default function* loginSaga() {
  yield takeEvery(LOGIN_REQUEST, loginResponse);
}