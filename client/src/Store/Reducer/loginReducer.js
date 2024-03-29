import { LOGIN_MODAL_ON, LOGIN_MODAL_OFF, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../Action/loginAction';

const initialLogin = {
  modalOn: false,
  success: true,
  data: {},
  userName: '',
  errorMsg: '',
}

const loginReducer = (state = initialLogin, action) => {
  switch(action.type) {
    case LOGIN_MODAL_ON:
      return {
        ...state,
        modalOn: true,
      }
    case LOGIN_MODAL_OFF:
      return {
        ...state,
        modalOn: false,
      }
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
