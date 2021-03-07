import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REMOVE_TOKEN_STATE  } from '../Action/loginAction';

const initialLogin = {
  success: true,
  data: {},
  userName: '',
  errorMsg: '',
  token: '',
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
        errorMsg: '',
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
