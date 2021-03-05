import { AUTHORIZED, NOT_AUTHORIZED } from '../Action/authorAction';

const initialAuthor = {
  isAuthorized: false,
}

const authorReducer = (state=initialAuthor, action) => {
  switch(action.type) {
    case AUTHORIZED:
      return {
        isAuthorized: true,
      }
    case NOT_AUTHORIZED:
      return {
        isAuthorized: false,
      }
    default:
      return state
  }
}

export default authorReducer;