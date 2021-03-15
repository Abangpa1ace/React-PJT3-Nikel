import React from 'react'
import styled from 'styled-components';
import { Button } from '../../../../Components/Common/StyledCommon';
import InfoContainer from './InfoContainer';
import { IoHomeOutline } from 'react-icons/io5';
import { flexBetween } from '../../../../Styles/theme';

const DetailInfoPickup = ({ setModalMode }) => {
  return (
    <InfoContainer>
      <Button 
        width="100%"
        height="55px"
        border={({ theme }) => theme.gray0C}
        radius="3px"
        onClick={() => setModalMode('pickup')} >
        <IoHomeOutline />
        <strong style={{ marginLeft: "10px" }}>배송보다 빠른, 매장픽업 서비스</strong>
      </Button>
      <PickupMore>
        <p>지금 주문하고, 매장에서 바로 픽업하세요.</p>
        <a href="/pickup">자세히 보기</a>
      </PickupMore>
    </InfoContainer>
  )
}

const PickupMore = styled.div`
  ${flexBetween};
  margin: 25px 0 0;

  a {
    color: ${({ theme }) => theme.gray3};
    font-size: 14px;
    text-decoration: underline;
  }
`;

export default DetailInfoPickup
