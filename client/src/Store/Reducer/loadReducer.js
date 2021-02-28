const initialLoad = {
  isLoading: false,
}

const loadReducer = (state=initialLoad, action) => {
  switch(action.type) {
    case 'LOAD_START':
      return {...state, isLoading: true}
    case 'LOAD_END':
      return {...state, isLoading: false}
    default:
      return state
  }
}

export default loadReducer;