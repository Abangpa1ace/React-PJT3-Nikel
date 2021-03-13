import React from 'react'
import styled from 'styled-components';
import CartListEmpty from './CartListEmpty';
import CartItem from './CartItem';

const CartList = ({ cartList, editCartItem, deleteCartItem, setCartEmpty }) => {
  const cartListMapper = () => {
    return (
      <>
        <p onClick={setCartEmpty}>전체삭제</p>
        <ul>
          {cartList.map(item => 
            <CartItem 
              item={item} 
              editCartItem={editCartItem}
              deleteCartItem={deleteCartItem} />
          )}
        </ul>
      </>
    )
  }
  
  return (
    <Cartlist>
      {cartList.length === 0 ? <CartListEmpty /> : cartListMapper()}
    </Cartlist>
  )
}

const Cartlist = styled.main`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.gray0C};
  border-bottom: 1px solid ${({ theme }) => theme.gray0C};
  padding: 25px 0 0;

  & > p {
    margin: 0 0 25px;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default CartList
