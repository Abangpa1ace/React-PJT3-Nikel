import React from 'react'
import styled from 'styled-components';
import { Button } from '../../../../Components/Common/StyledCommon';
import InfoContainer from './InfoContainer';
import { BiHeart } from 'react-icons/bi'

const DetailInfoButton = ({ goToPurchase, goToCart }) => {

  return (
    <InfoContainer>
      <Button
        width="100%"
        height="60px"
        margin="0 0 10px"
        color="#ffffff"
        background={({ theme }) => theme.black}
        backgroundHov="#444444"
        fontSize="16px"
        radius="30px"
        onClick={goToPurchase}
      >
        바로구매
      </Button>
      <ButtonCartWish>
        <Button
          width="100%"
          height="60px"
          border={({ theme }) => theme.black}
          borderHov="#444444"
          fontSize="16px"
          radius="30px"
          onClick={goToCart}
        >
          장바구니
        </Button>
        <Button
          width="100%"
          height="60px"
          border={({ theme }) => theme.black}
          borderHov="#444444"
          fontSize="16px"
          radius="30px"
        >
          위시리스트 <BiHeart />
        </Button>
      </ButtonCartWish>
    </InfoContainer>
  )
}

const ButtonCartWish = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  svg {
    margin: 0 0 0 10px;
  }
`;

export default DetailInfoButton;
