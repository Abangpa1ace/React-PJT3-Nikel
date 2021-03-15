export const ADD_CART = 'ADD_CART';
export const UPDATE_CART = 'UPDATE_CART'
export const DELETE_CART = 'DELETE_CART'
export const DELETE_CART_ALL = 'DELETE_CART_ALL'; 

export const addCart = (item) => {
  return {
    type: ADD_CART,
    item,
  }
}

export const updateCart = (item) => {
  return {
    type: UPDATE_CART,
    item,
  }
}

export const deleteCart = (id, size) => {
  return {
    type: DELETE_CART,
    id,
    size,
  }
}

export const deleteCartAll = () => {
  return {
    type: DELETE_CART_ALL,
  }
}
