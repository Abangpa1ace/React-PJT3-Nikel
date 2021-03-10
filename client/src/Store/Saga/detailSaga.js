import { call, put, takeLatest } from "redux-saga/effects";
import axios from 'axios';
import { LOAD_DETAIL, LOAD_DETAIL_SUCCESS, LOAD_DETAIL_FAILURE } from '../Action/detailAction';
import { DETAIL_API } from '../../Data/config';

function detailApi(id) {
  return axios.get(`${DETAIL_API}/${id}`)
}

function* fetchDetail(action) {
  try {
    const result = yield call(detailApi, action.id);
    yield put({
      type: LOAD_DETAIL_SUCCESS,
      item: result.data.item,
    })
  }
  catch(error) {
    yield put({
      type: LOAD_DETAIL_FAILURE,
      error: error.response.data,
    })
    console.log(error);
  }
}

export default function* detailSaga() {
  yield takeLatest(LOAD_DETAIL, fetchDetail);
}