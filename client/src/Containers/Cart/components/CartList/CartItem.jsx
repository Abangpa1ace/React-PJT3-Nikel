import React from 'react'
import styled from 'styled-components'

const CartItem = ({ item, editCartItem, deleteCartItem }) => {
  const { id, images, model, name, size, count, price } = item;
  return (
    <Cartitem>
      <img src={images[0]} alt="cart-item-img" />
      <CartItemInfo>
        <h4>{name}</h4>
        <p>스타일: {model}</p>
        <p>사이즈: {size}</p>
        <p>수량: {count}</p>
        <div className="link-wrapper">
          <span>위시리스트에 추가</span>
          <span>나중에 구매하기</span>
        </div>
      </CartItemInfo>
      <CartItemUpdate onClick={() => editCartItem(id)}>옵션 변경</CartItemUpdate>
      <CartItemPrice>
        {price.toLocaleString()} 원
      </CartItemPrice>
      <button onClick={() => deleteCartItem(id)}>X</button>
    </Cartitem>
  )
}

const Cartitem = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 25px 0;
  border-top: 1px solid ${({ theme }) => theme.gray0C};

  img {
    width: 10%;
    object-fit: cover;
  }

  button {
    width: 5%;
    font-size: 20px;
  }
`;

const CartItemInfo = styled.div`
  width: 50%;
  padding: 0 40px;

  p {
    margin: 0 0 8px;
    color: ${({ theme }) => theme.gray2};

    &:nth-child(2) {
      margin-top: 15px;
      color: ${({ theme }) => theme.black};
    }
  }

  div.link-wrapper {
    margin: 50px 0 0;
    span {
      margin: 0 20px 0 0%;
      color: ${({ theme }) => theme.gray2};
      font-size: 12px;
    }
  }
`;

const CartItemUpdate = styled.p`
  width: 25%;
  text-decoration: underline;
  cursor: pointer;
`;

const CartItemPrice = styled.p`
  width: 10%;
  color: ${({ theme }) => theme.orange};
  font-size: 17px;
`;

export default CartItem
