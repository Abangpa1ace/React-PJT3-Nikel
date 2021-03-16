import React from 'react';
import styled from 'styled-components';
import { InfoAlerter } from './index';
import { Button } from '../../../../../Components/Common/StyledCommon';
import { flexAlign } from '../../../../../Styles/theme';

const PurchaseCount = ({ sizes, selectSize, selectCount, countAlert, minusCount, plusCount }) => {
  return (
    <Purchasecount>
      <CountWrapper countAlert={countAlert} >
        <span>수량</span>
        <span>{selectCount}</span>
        <Button
          padding="20px"
          color={({ theme, disabled }) => disabled ? theme.gray1 : theme.black}
          fontSize="28px"
          disabled={selectCount === 1}
          onClick={() => minusCount()}
          >-</Button>
        <Button
          padding="20px"
          fontSize="28px"
          onClick={() => plusCount()}
          >+</Button>
      </CountWrapper>
      {countAlert && <InfoAlerter>{sizes[selectSize]}개까지 구매가 가능합니다.</InfoAlerter>}
    </Purchasecount>
  )
}

const Purchasecount = styled.div`
  margin: 20px 0 0px;
`;

const CountWrapper = styled.div`
  ${flexAlign};
  border-bottom: 1px solid;
  border-color: ${({ theme, countAlert }) => countAlert ? theme.redError : theme.gray0C};

  span {
    width: 30px;

    &:nth-child(2) {
      margin: 0 0 0 30px;
    }
  }
`;

export default PurchaseCount
