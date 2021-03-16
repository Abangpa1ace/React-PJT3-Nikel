import React from 'react'
import styled from 'styled-components';
import AsideOrder from './AsideOrder';

const CartAside = ({ totalPrice }) => {
  return (
    <Cartaside>
      <AsideOrder totalPrice={totalPrice} />
      <AsideNotice>
        * 장기간 장바구니에 보관하신 상품은 시간이 지남에 따라 가격과 혜택이 변동될 수 있으며, 최대 30일동안 보관됩니다.
      </AsideNotice>
    </Cartaside>
  )
}

const Cartaside = styled.aside`
  width: 500px;
  margin: 0 0 0 40px;
`;

const AsideNotice = styled.p`
  color: ${({ theme }) => theme.gray1};
  font-size: 12px;
  line-height: 1.5;
`;

export default CartAside
