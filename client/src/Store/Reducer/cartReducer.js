import { ADD_CART, DELETE_CART, DELETE_CART_ALL, UPDATE_CART } from '../Action/cartAction';

const initialCart = {
  list: [],
};

const savedCart = sessionStorage.getItem("Cart")

if (savedCart) {
  initialCart.list = JSON.parse(savedCart);
}

const cartReducer = (state=initialCart, action) => {
  switch(action.type) {
    case ADD_CART:
      const addList = [...state.list, action.item];
      sessionStorage.setItem("Cart", JSON.stringify(addList))
      return {
        list: addList,
      }
    case UPDATE_CART:
      const updateList = state.list.map(item => item.id === action.item.id ? action.item : item);
      sessionStorage.setItem("Cart", JSON.stringify(updateList))
      return {
        list: updateList,
      }
    case DELETE_CART:
      const deleteIdx = state.list.findIndex(item => (item.id === action.id && item.size === action.size))
      const deleteList = state.list.filter((_,i) => i !== deleteIdx);
      sessionStorage.setItem("Cart", JSON.stringify(deleteList))
      return {
        list: deleteList,
      }
    case DELETE_CART_ALL:
      sessionStorage.removeItem("Cart");
      return {
        list: [],
      }
    default:
      return state;
  }
}

export default cartReducer;