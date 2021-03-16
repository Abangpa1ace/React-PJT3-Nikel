import { call, put, takeEvery } from "redux-saga/effects";
import axios from 'axios';
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../Action/registerAction';
import { REGISTER_API } from '../../Data/config';

const registerAlerter = {
  'Undefined Email' : '이메일을 입력해주세요.',
  'Not Valid Email' : '이메일 형태로 입력해주세요.',
  'Already Existing Email' : '이미 존재하는 이메일입니다.',
  'Undefined Password' : '비밀번호를 입력해주세요.',
  'Not Valid Password' : '비밀번호 형식을 맞춰주세요.',
  'Undefined User Name' : '이름을 입력해주세요.',
  'Undefined Phone Number' : '전화번호를 입력해주세요.',
  'Invalid Phone Value' : '전화번호는 숫자만 입력 가능합니다.',
}

function registerApi(data) {
  return axios.post(REGISTER_API, data);
}

function* registerResponse(action) {
  try {
    yield call(registerApi, action.data);
    yield put ({
      type: REGISTER_SUCCESS,
    })
    alert("회원가입 성공!");
    window.location.href='/';
  }
  catch(err) {
    yield put ({
      type: REGISTER_FAILURE,
      errorMsg: err.response.data.message,
    })
    alert("에러 발생: ", registerAlerter[err.response.data.message]);
  }
}

export default function* registerSaga() {
  yield takeEvery(REGISTER_REQUEST, registerResponse);
}
