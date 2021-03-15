import React from 'react'
import styled from 'styled-components';
import CartAsideOrder from './CartAsideOrder';

const CartAside = ({ totalPrice }) => {
  return (
    <Cartaside>
      <CartAsideOrder totalPrice={totalPrice} />
      <CartAsideNotice>
        * 장기간 장바구니에 보관하신 상품은 시간이 지남에 따라 가격과 혜택이 변동될 수 있으며, 최대 30일동안 보관됩니다.
      </CartAsideNotice>
    </Cartaside>
  )
}

const Cartaside = styled.aside`
  width: 500px;
  margin: 0 0 0 40px;
`;

const CartAsideNotice = styled.p`
  color: ${({ theme }) => theme.gray1};
  font-size: 12px;
  line-height: 1.5;
`;

export default CartAside
