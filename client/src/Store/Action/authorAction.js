export const AUTHORIZED = 'AUTHORIZED';
export const NOT_AUTHORIZED = 'NOT_AUTHORIZED';

export const setAuthorized = () => {
  return {
    type: AUTHORIZED,
  }
}

export const unsetAuthorized = () => {
  return {
    type: NOT_AUTHORIZED,
  }
}