import React from 'react'
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { Button } from '../../../../Common/StyledCommon';
import InfoContainer from './InfoContainer';
import { BiHeart } from 'react-icons/bi'

const DetailInfoButton = ({ history, selectSize, setSizeAlert }) => {

  const clickPurchase = () => {
    if (selectSize === 0) {
      setSizeAlert(true)
    }
    else {
      setSizeAlert(false)
      history.push("/purchase")
    }
  }

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
        onClick={() => clickPurchase()}
      >
        바로구매
      </Button>
      <ButtonCartWish>
        <Link to="/cart">
          <Button
            width="100%"
            height="60px"
            border={({ theme }) => theme.black}
            borderHov="#444444"
            fontSize="16px"
            radius="30px"
          >
            장바구니
          </Button>
        </Link>
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

export default withRouter(DetailInfoButton);
