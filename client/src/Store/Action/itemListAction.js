export const LOAD_ITEMLIST = 'LOureAD_ITEMLISTure';
export const LOAD_ITEMLIST_SUCCESS = 'LOAD_ITEMLIST_SUCCESS'; 
export const LOAD_ITEMLIST_FAILURE = 'LOAD_ITEMLIST_FAILURE';
export const SORT_ITEMLIST = 'SORT_ITEMLIST';

export const loadItemList = (query) => {
  return {
    type: LOAD_ITEMLIST,
    query
  }
}

export const loadItemSuccess = (data) => {
  return {
    type: LOAD_ITEMLIST_SUCCESS,
    data,
  }
}

export const loadItemListFailure = (error) => {
  return {
    type: LOAD_ITEMLIST_FAILURE,
    error,
  }
}

export const sortItemList = (mode) => {
  return {
    type: SORT_ITEMLIST,
    mode,
  }
}