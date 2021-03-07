import { call, put, takeLatest } from "redux-saga/effects";
import axios from 'axios';
import { LOAD_ITEMLIST, LOAD_ITEMLIST_SUCCESS, LOAD_ITEMLIST_FAILURE } from '../Action/itemListAction';
import { ITEMS_API } from '../../Data/config';

function itemListApi(path) {
  return axios.get(`${ITEMS_API}${path}`);
}

function* fetchItemList(action) {
  try {
    const result = yield call(itemListApi, action.path);
    yield put({
      type: LOAD_ITEMLIST_SUCCESS,
      newList: result.data.itemList,
    })
  }
  catch(error) {
    yield put ({
      type: LOAD_ITEMLIST_FAILURE,
      error: error.response.data,
    })
    console.log(error);
  }
}

export default function* itemListSaga() {
  yield takeLatest(LOAD_ITEMLIST, fetchItemList)
}