export const LOAD_ITEMLIST = 'LOAD_ITEMLIST';
export const SORT_ITEMLIST = 'SORT_ITEMLIST';

export const loadItemList = (data) => {
  return {
    type: LOAD_ITEMLIST,
    data,
  }
}

export const sortItemList = (data, mode) => {
  return {
    type: SORT_ITEMLIST,
    mode,
    data,
  }
}