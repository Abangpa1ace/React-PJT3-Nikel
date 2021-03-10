import { LOAD_DETAIL, LOAD_DETAIL_SUCCESS, LOAD_DETAIL_FAILURE } from '../Action/detailAction';

const initialDetail = {
  item: {},
}

const detailReducer = (state = initialDetail, action) => {
  switch(action.type) {
    case LOAD_DETAIL:
      return {
        ...state,
        id: action.id,
      }
    case LOAD_DETAIL_SUCCESS:
      return {
        ...state,
        item: action.item,
      }
    case LOAD_DETAIL_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state;
  }
}

export default detailReducer;