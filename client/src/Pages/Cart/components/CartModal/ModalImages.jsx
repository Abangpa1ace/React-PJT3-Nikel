import React from 'react';
import styled from 'styled-components'

const CartModalImages = ({ images }) => {
  return (
    <CartModalImg>
      {images && images.concat(images.slice(0,3)).map(img => <img src={img} alt="cart-option-img" />)}
    </CartModalImg>
  )
}

const CartModalImg = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  width: 45%;
  margin: 0 30px 0 0;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
`;

export default CartModalImages
