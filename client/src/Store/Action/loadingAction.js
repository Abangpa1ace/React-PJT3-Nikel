export const LOAD_START = 'LOAD_START';
export const LOAD_END = 'LAD_END'

export const loadStart = () => {
  return {
    type: LOAD_START,
  }
}

export const loadEnd = () => {
  return {
    type: LOAD_END,
  }
}