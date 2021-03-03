import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../Action/loginAction';

const initialLogin = {
  success: true,
  data: {},
  userName: '',
  token: '',
  errorMsg: '',
}

const loginReducer = (state = initialLogin, action) => {
  switch(action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        data: action.data,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        success: true,
        data: {},
        userName: action.userName,
        token: action.token,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        success: false,
        errorMsg: action.errorMsg,
      }
    default:
      return state;
  }
}

export default loginReducer;
