import React from 'react'
import styled from 'styled-components'
import { BsBag } from 'react-icons/bs';
import { Button } from '../../../../Components/Common/StyledCommon';
import { Link } from 'react-router-dom';

const CartListEmpty = () => {
  return (
    <EmptyList>
      <BsBag />
      <p>장바구니에 담긴 상품이 없습니다.</p>
      <Link to="/">
        <Button
          width="200px"
          height="50px"
          background={({ theme }) => theme.black}
          backgroundHov="#444444"
          color="#FFFFFF"
          radius="3px"
        >
          계속 쇼핑하기
        </Button>
      </Link>
    </EmptyList>
  )
}

const EmptyList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 0 55px;

  svg {
    font-size: 40px;
  }

  p {
    margin: 50px 0;
  }
`;

export default CartListEmpty
