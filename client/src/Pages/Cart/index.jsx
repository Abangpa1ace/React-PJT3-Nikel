import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart, deleteCartAll } from '../../Store/Action/cartAction';
import CartModal from './components/CartModal';
import CartList from './components/CartList';
import CartAside from './components/CartAside';
import RecommendCarousel from '../../Components/Common/RecommendCarousel';
import { flexAlignStart } from '../../Styles/theme';

const Cart = () => {
  const { list } = useSelector(state => state.cart);
  const totalPrice = list.map(item => item.price).reduce((acc, cur) => acc+cur, 0);
  const dispatch = useDispatch();
  const [isModalOn, setIsModalOn] = useState(false);
  const [editItem, setEditItem] = useState({});

  const editCartItem = (id) => {
    setIsModalOn(true);
    setEditItem(list.find(item => item.id === id));
  }

  const deleteCartItem = (id, size) => {
    dispatch(deleteCart(id, size))
  }

  const setCartEmpty = () => {
    dispatch(deleteCartAll())
  }

  return (
    <CartPage isModalOn={isModalOn}>
      <CartModal isModalOn={isModalOn} setIsModalOn={setIsModalOn} 
        editItem={editItem} setEditItem={setEditItem} />
      <CartHeader>
        <h1>장바구니</h1>
        <p>{`${list.length}개 상품`}</p>
      </CartHeader>
      <CartWrapper>
        {list.length !== 0 && 
        <CartCoupon>
          <p>사용 가능한 쿠폰이 있습니다.</p>
          <p>아래 프로모 코드 입력란에 입력하여 사용하세요.</p>
        </CartCoupon>}
        <div className="cart-container">
          <CartList 
            cartList={list} 
            editCartItem={editCartItem}
            deleteCartItem={deleteCartItem}
            setCartEmpty={setCartEmpty}
          />
          {list.length !== 0 && <CartAside totalPrice={totalPrice} />}
        </div>
      </CartWrapper>
      <RecommendCarousel />
    </CartPage>
  )
}

const CartPage = styled.div`
  position: relative;
  padding: 40px 0;

  ${({ isModalOn }) => isModalOn
    && css`
      height: 100%;
      overflow-y: hidden;
    `
  }
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
