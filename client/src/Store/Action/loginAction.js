export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = (data) => {
  return {
    type: LOGIN_REQUEST,
    data,
  }
}

export const loginSuccess = (userName, token) => {
  return {
    type: LOGIN_SUCCESS,
    userName,
    token,
  }
}

export const loginFailure = (errorMsg) => {
  return {
    type: LOGIN_FAILURE,
    errorMsg,
  }
}
