import { LOAD_START, LOAD_END } from '../Action/loadingAction'

const initialLoading = {
  isLoading: false,
}

const loadingReducer = (state=initialLoading, action) => {
  switch(action.type) {
    case LOAD_START:
      return {
        isLoading: true
      }
    case LOAD_END:
      return {
        isLoading: false
      }
    default:
      return state
  }
}

export default loadingReducer;