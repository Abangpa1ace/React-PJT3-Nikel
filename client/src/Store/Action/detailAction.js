export const LOAD_DETAIL = 'LOAD_DETAIL';
export const LOAD_DETAIL_SUCCESS = 'LOAD_DETAIL_SUCCESS'; 
export const LOAD_DETAIL_FAILURE = 'LOAD_DETAIL_FAILURE';

export const loadDetail = (id) => {
  return {
    type: LOAD_DETAIL,
    id,
  }
}

export const loadDetailSuccess = (item) => {
  return {
    type: LOAD_DETAIL_SUCCESS,
    item,
  }
}

export const loadDetailFailure = (error) => {
  return {
    type: LOAD_DETAIL_FAILURE,
    error,
  }
}