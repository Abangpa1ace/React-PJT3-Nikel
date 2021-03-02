export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const registerRequest = (data) => {
  return {
    type: REGISTER_REQUEST,
    data
  }
}

export const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS,
  }
}

export const registerFailure = (message) => {
  return {
    typy: REGISTER_FAILURE,
    message,
  }
}