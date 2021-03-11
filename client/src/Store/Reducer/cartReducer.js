import { ADD_CART, DELETE_CART, DELETE_CART_ALL, UPDATE_CART } from '../Action/cartAction';

const initialCart = {
  list: [
    {
      id: 10000971,
      images: [
        '/Images/default.jpg',
        '/Images/default.jpg',
        '/Images/default.jpg',
        '/Images/default.jpg',
        '/Images/default.jpg',
        '/Images/default.jpg',
      ],
      model: 'DA2189-001',
      name: '나이키 에어맥스 테일 윈드 5SP',
      category: {
        primary: {
          code: 'male',
          title: '남성',
        },
        secondary: {
          code: 'shoes',
          title: '신발',
        },
        tertiary: {
          code: 'lifestyle',
          title: '라이프스타일',
        }
      },
      size: 270,
      count: 1,
      // colors: {
      //   code: 'white',
      //   title: '흰색',
      //   otherColors: [
      //     {
      //       id: 10001010,
      //       image: '/Images/default2.jpeg',
      //       code: 'red',
      //     },
      //     {
      //       id: 10001011,
      //       image: '/Images/default.jpg',
      //       code: 'gold',
      //     },
      //     {
      //       id: 10001012,
      //       image: '/Images/default2.jpeg',
      //       code: 'navy',
      //     },
      //   ]
      // },
      price: 209000,
    },
  ],
}

const cartReducer = (state=initialCart, action) => {
  switch(action.type) {
    case ADD_CART:
      return {
        list: [...state.list, action.item]
      }
    case UPDATE_CART:
      const updateList = state.list.map(item => item.id === action.item.id ? action.item : item);
      return {
        list: updateList,
      }
    case DELETE_CART:
      return {
        list: state.list.filter(item => item.id !== action.id && item.size !== action.size),
      }
    case DELETE_CART_ALL:
      return {
        list: [],
      }
    default:
      return state;
  }
}

export default cartReducer;