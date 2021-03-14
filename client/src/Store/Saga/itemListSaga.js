import { call, put, takeLatest } from "redux-saga/effects";
import axios from 'axios';
import { LOAD_ITEMLIST, LOAD_ITEMLIST_SUCCESS, LOAD_ITEMLIST_FAILURE } from '../Action/itemListAction';
import { ITEMS_API } from '../../Data/config';

function itemListApi(path, query) {
  let url = `${ITEMS_API}${path}`
  if (query) {
    Object.entries(query).forEach((entry, idx) => 
    
    url = url + `${idx === 0 ? '?' : '&'}` + entry.join("="))
  }
  return axios.get(url);
}

function* fetchItemList(action) {
  try {
    const result = yield call(itemListApi, action.path, action.query);
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