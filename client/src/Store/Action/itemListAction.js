export const LOAD_ITEMLIST = 'LOAD_ITEMLIST';
export const LOAD_ITEMLIST_SUCCESS = 'LOAD_ITEMLIST_SUCCESS'; 
export const LOAD_ITEMLIST_FAILURE = 'LOAD_ITEMLIST_FAILURE';
export const FILTER_ITEMLIST = 'FILTER_ITEMLIST';
export const FILTER_ITEMLIST_SUCCESS = 'FILTER_ITEMLIST_SUCCESS'; 
export const FILTER_ITEMLIST_FAILURE = 'FILTER_ITEMLIST_FAILURE';
export const SORT_ITEMLIST = 'SORT_ITEMLIST';

export const loadItemList = (path) => {
  return {
    type: LOAD_ITEMLIST,
    path,
  }
}

export const loadItemListSuccess = (list) => {
  return {
    type: LOAD_ITEMLIST_SUCCESS,
    list,
  }
}

export const loadItemListFailure = (error) => {
  return {
    type: LOAD_ITEMLIST_FAILURE,
    error,
  }
}

export const filterItemList = (query) => {
  return {
    type: FILTER_ITEMLIST,
    query,
  }
}

export const filterItemListSuccess = (list) => {
  return {
    type: FILTER_ITEMLIST_SUCCESS,
    list,
  }
}

export const filterItemListFailure = (error) => {
  return {
    type: FILTER_ITEMLIST_FAILURE,
    error,
  }
}

export const sortItemList = (mode) => {
  return {
    type: SORT_ITEMLIST,
    mode,
  }
}