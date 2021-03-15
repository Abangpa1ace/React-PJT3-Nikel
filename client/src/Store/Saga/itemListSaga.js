import { call, put, select, takeLatest } from "redux-saga/effects";
import axios from 'axios';
import { LOAD_ITEMLIST, LOAD_ITEMLIST_SUCCESS, LOAD_ITEMLIST_FAILURE, FILTER_ITEMLIST } from '../Action/itemListAction';
import { ITEMS_API } from '../../Data/config';
import { itemListState } from '../Selector';

function itemListApi(path, round, query) {
  let url = `${ITEMS_API}${path}?round=${round}`
  if (query) {
    Object.entries(query).forEach((entry) => 
      url = url + '&' + entry.join("="))
  }
  return axios.get(url);
}

function* fetchItemList(action) {
  const { round, query } = yield select(itemListState);
  try {
    const result = yield call(itemListApi, action.path, round, query);
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

function* fetchFilteredList(action) {
  const { path, round } = yield select(itemListState);
  console.log(path, round);
  try {
    const result = yield call(itemListApi, path, round, action.query);
    yield put ({
      type: LOAD_ITEMLIST_SUCCESS,
      filterList: result.data.itemList,
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

export function* itemListFilterSaga() {
  yield takeLatest(FILTER_ITEMLIST, fetchFilteredList)
}