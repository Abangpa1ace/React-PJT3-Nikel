import { LOAD_ITEMLIST, LOAD_ITEMLIST_SUCCESS, LOAD_ITEMLIST_FAILURE, SORT_ITEMLIST } from '../Action/itemListAction';

const initialItemList = {
  itemList: [],
  category: {
    primary: {
      id: 0,
      code: '',
    },
    secondary: {
      id: 0,
      code: '',
    },
    tertiary: {
      id: 0,
      code: '',
    },
  },
  filter: {},
  sortMode: 'new',
}

const itemListReducer = (state = initialItemList, action) => {
  switch(action.type) {
    case LOAD_ITEMLIST:
      return {
        ...state,
        query: {
          category: state.category,
          filter: state.filter,
        }
      }

    case LOAD_ITEMLIST_SUCCESS:
      return {
        ...state,
        itemList: action.data,
      }
    
    case LOAD_ITEMLIST_FAILURE:
      return {
        ...state,
        error: action.error,
      }

    case SORT_ITEMLIST:
      let newItemList = state.itemList;
      if (action.mode === 'new') {
        newItemList.sort((a,b) => a.date.launched > b.date.launched ? a : b);
      }
      else if (action.mode === 'expensive') {
        newItemList.sort((a,b) => a.price > b.price ? a : b);
      }
      else if (action.mode === 'cheap') {
        newItemList.sort((a,b) => a.price > b.price ? b : a);
      }
      return {
        ...state,
        itemList: newItemList,
      }

    default:
      return state;
  }
}

export default itemListReducer;