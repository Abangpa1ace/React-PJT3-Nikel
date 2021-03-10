import React from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart, deleteCartAll } from '../../Store/Action/cartAction';
import CartList from './components/CartList/CartList';
import CartAside from './components/CartAside/CartAside';
import RecommendCarousel from '../../Components/RecommendCarousel/RecommendCarousel';
import { flexAlignStart } from '../../Styles/theme';

const Cart = () => {
  const cartState = useSelector(state => state.cart);
  const cartList = cartState.list;
  const totalPrice = cartList.map(item => item.price).reduce((acc, cur) => acc+cur, 0);
  const dispatch = useDispatch();

  const deleteCartItem = (id) => {
    dispatch(deleteCart(id))
  }

  const setCartEmpty = () => {
    dispatch(deleteCartAll())
  }

  return (
    <CartPage>
      <CartHeader>
        <h1>장바구니</h1>
        <p>{`${cartList.length}개 상품`}</p>
      </CartHeader>
      <CartWrapper>
        {cartList.length !== 0 && 
        <CartCoupon>
          <p>사용 가능한 쿠폰이 있습니다.</p>
          <p>아래 프로모 코드 입력란에 입력하여 사용하세요.</p>
        </CartCoupon>}
        <div className="cart-container">
          <CartList 
            cartList={cartList} 
            deleteCartItem={deleteCartItem}
            setCartEmpty={setCartEmpty}
          />
          {cartList.length !== 0 && <CartAside totalPrice={totalPrice} />}
        </div>
      </CartWrapper>
      <RecommendCarousel />
    </CartPage>
  )
}

const CartPage = styled.div`
  padding: 40px 0;
`;

const CartHeader = styled.header`
  margin: 0 0 40px;
  text-align: center;
  
  h1 {
    font-size: 28px;
    font-weight: 500;
  }

  p {
    margin: 15px 0 0;
    color: ${({ theme }) => theme.gray3};
  }
`;

const CartWrapper = styled.div`
  width: ${({ theme }) => theme.detailWidth};
  padding: 0 40px;
  margin: 0 auto 200px;
  
  div.cart-container {
    ${flexAlignStart};
    width: 100%;
    margin: 15px 0;
  }
  
  * {
    font-size: 14px;
  }
`;

const CartCoupon = styled.div`
  text-align: left;
  p {
    color: ${({ theme }) => theme.orange};
    line-height: 1.5;
  }
`;

export default Cart
