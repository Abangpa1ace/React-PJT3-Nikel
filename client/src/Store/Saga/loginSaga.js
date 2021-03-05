import { call, put, takeEvery } from "redux-saga/effects";
import axios from 'axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../Action/loginAction';
import { LOGIN_API } from '../../Data/config';

// const loginAlerter = {
//   'Undefined Email' : '이메일을 입력해주세요.',
//   'Not Valid Email' : '이메일 형태로 입력해주세요.',
//   'Not Existing Email' : '존재하지 않는 이메일입니다.',
//   'Undefined Password' : '비밀번호를 입력해주세요.',
//   'Not Valid Password' : '비밀번호 형식을 맞춰주세요.',
//   'Unmatched Password' : '일치하지 않는 비밀번호입니다.',
// }

function loginApi(data) {
  return axios.post(LOGIN_API, data);
}

function* loginResponse(action) {
  try {
    const result = yield call(loginApi, action.data);
    yield put ({
      type: LOGIN_SUCCESS,
      userName: result.data.userName,
    })
    yield localStorage.setItem("token", result.data.token);
    yield alert('로그인 성공');
    yield window.location.reload();
  }
  catch(err) {
    yield put ({
      type: LOGIN_FAILURE,
      errorMsg: err.response.data.message,
    })
    // alert(loginAlerter[err.response.data.message])
  }
}

export default function* loginSaga() {
  yield takeEvery(LOGIN_REQUEST, loginResponse);
}