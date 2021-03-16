import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../../../../Components/Common/StyledCommon';
import { flexBetween } from '../../../../Styles/theme';

const AsideOrder = ({ totalPrice }) => {
  return (
    <Asideorder>
      <header>
        주문예정금액
      </header>
      <AsideOrderPrice>
        <PriceWrapper>
          <p>상품 금액</p>
          <span>{totalPrice.toLocaleString()} 원</span>
        </PriceWrapper>
        <PriceWrapper>
          <p>예상 배송비</p>
          <span>{false || 0} 원</span>
        </PriceWrapper>
        <PriceWrapper interested>
          <p>상품 할인 금액</p>
          <span>{false || 0} 원</span>
        </PriceWrapper>
        <PriceWrapper interested>
          <p>주문 할인 금액</p>
          <span>{false || 0} 원</span>
        </PriceWrapper>
        <PriceWrapper total interested>
          <p>총 금액</p>
          <span>{totalPrice.toLocaleString()} 원</span>
        </PriceWrapper>
        <Link to="/purchase">
          <Button
            width="100%"
            height="40px"
            color="#FFFFFF"
            background={({ theme }) => theme.orange}
            backgroundHov={({ theme }) => theme.orangeHov}
            radius="3px">
            주문하기
          </Button>
        </Link>
      </AsideOrderPrice>
    </Asideorder>
  )
}

const Asideorder = styled.aside`
  width: 100%;
  margin: 0 0 30px;
  border: 1px solid ${({ theme }) => theme.gray0C};

  header {
    padding: 20px;
    background: ${({ theme }) => theme.gray0C};
    font-weight: 700;
  }
`;

const AsideOrderPrice = styled.div`
  padding: 20px;
`;

const PriceWrapper = styled.div`
  ${flexBetween};
  margin: 0 0 25px;

  span {
    color: ${({ interested, theme }) => interested ? theme.orange : theme.black};
    font-weight: bold;
  }

  p, span {
    font-size: ${({ total }) => total ? '18px' : '14px'};
    
  }
`;

export default AsideOrder
