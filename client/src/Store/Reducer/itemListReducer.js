import { LOAD_ITEMLIST, LOAD_ITEMLIST_SUCCESS, LOAD_ITEMLIST_FAILURE, SORT_ITEMLIST } from '../Action/itemListAction';

const initialItemList = {
  list: [],
  round: 0,
  path: '',
  filter: {},
  sortMode: 'new',
}

const itemListReducer = (state = initialItemList, action) => {
  switch(action.type) {
    case LOAD_ITEMLIST:
      return {
        ...state,
        path: action.path,
        query: state.filter,
      }

    case LOAD_ITEMLIST_SUCCESS:
      const concatList = state.list.concat(action.newList)
      return {
        ...state,
        list: concatList.reduce((acc, cur) => acc.includes(cur) ? acc : [...acc, cur], []),
      }
    
    case LOAD_ITEMLIST_FAILURE:
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