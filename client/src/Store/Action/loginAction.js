export const LOGIN_MODAL_ON = 'LOGIN_MODAL_ON'; 
export const LOGIN_MODAL_OFF = 'LOGIN_MODAL_OFF'; 
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginModalOn = () => {
  return {
    type: LOGIN_MODAL_ON,
  }
}

export const loginModalOff = () => {
  return {
    type: LOGIN_MODAL_OFF,
  }
}

export const loginRequest = (data) => {
  return {
    type: LOGIN_REQUEST,
    data,
  }
}

export const loginSuccess = (userName) => {
  return {
    type: LOGIN_SUCCESS,
    userName,
  }
}

export const loginFailure = (errorMsg) => {
  return {
    type: LOGIN_FAILURE,
    errorMsg,
  }
}
