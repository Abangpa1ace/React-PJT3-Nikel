import { LOAD_ITEMLIST, LOAD_ITEMLIST_SUCCESS, LOAD_ITEMLIST_FAILURE, SORT_ITEMLIST, FILTER_ITEMLIST, FILTER_ITEMLIST_SUCCESS, FILTER_ITEMLIST_FAILURE } from '../Action/itemListAction';

const initialItemList = {
  list: [],
  round: 0,
  path: '',
  query: {},
  sortMode: 'new',
}

const itemListReducer = (state = initialItemList, action) => {
  switch(action.type) {
    case LOAD_ITEMLIST:
      return {
        ...state,
        path: action.path,
      }

    case LOAD_ITEMLIST_SUCCESS:
      return {
        ...state,
        list: state.list.concat(action.newList),
        round: state.round + 1,
      }
    
    case LOAD_ITEMLIST_FAILURE:
      return {
        ...state,
        error: action.error,
      }

    case FILTER_ITEMLIST:
      return {
        ...state,
        round: 0,
        query: action.query,
      }

    case FILTER_ITEMLIST_SUCCESS:
      return {
        ...state,
        list: action.filterList,
      }
    
    case FILTER_ITEMLIST_FAILURE:
      return {
        ...state,
        error: action.error,
      }

    case SORT_ITEMLIST:
      let newItemList = state.list;
      if (action.mode === 'new') {
        newItemList = newItemList.sort((a,b) => a.date.launched - b.date.launched);
      }
      else if (action.mode === 'expensive') {
        newItemList = newItemList.sort((a,b) => b.price - a.price);
      }
      else if (action.mode === 'cheap') {
        newItemList = newItemList.sort((a,b) => a.price - b.price);
      }

      return {
        ...state,
        list: newItemList,
        sortMode: action.mode,
      }

    default:
      return state;
  }
}

export default itemListReducer;