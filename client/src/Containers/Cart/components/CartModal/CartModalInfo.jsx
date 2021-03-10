import React from 'react'
import styled from 'styled-components';
import { flexBetween } from '../../../../Styles/theme';

const CartModalInfo = ({ editItem }) => {
  const { name, category, price } = editItem;
  return (
    <ModalInfo>
      <InfoTitle>
        <p>
          <span>{category && Object.values(category).map(e => e.title).join(' ')}</span>
          <span className="bold">{price && `${price.toLocaleString()} 원`}</span>
        </p>
        <h1>{name}</h1>
      </InfoTitle>
      <InfoPurchase>
        <header>
          <p>사이즈 선택</p>
        </header>
        <InfoPurchaseSize>
          {sizes && Object.entries(sizes).map(size => 
            <li key={size[1]}>
              <SizeButton
                selected={size[0] === selectSize}
                disabled={size[1] === 0}
                onClick={() => clickSize(size[0])}
              >{size[0]}</SizeButton>
            </li>
          )}
        </InfoPurchaseSize>
      </InfoPurchase>
    </ModalInfo>
  )
}

const ModalInfo = styled.section`
  width: 55%;
  height: 1400px;
  border: 1px solid red;
`;

const InfoTitle = styled.div`
  margin: 0 0 50px;
  & > p {
    ${flexBetween};
    
    span.bold {
      font-weight: bold;
    }
  }
  h1 {
    font-size: 30px;
    margin: 20px 0 40px;
    word-break: keep-all;
  }
`;

const InfoPurchase = styled.div`
  width: 100%;
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    p {
      font-weight: bold;
    }
    span {
      font-size: 12px;
      color: ${({ theme }) => theme.gray1};
      cursor: pointer;
    }
  }
`;

const InfoPurchaseSize = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 7px;
  margin: 30px 0 0;
  border: ${({ sizeAlert, theme }) => sizeAlert && `1px solid ${theme.redError}`};
`;

const SizeButton = styled.button`
  ${flexCenter};
  width: 100%;
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.gray0C};
  border-radius: 5px;
  font-size: 15px;
  &:hover { 
    border: 1px solid ${({ disabled, theme }) => !disabled && theme.black}
  };
  ${({ selected, disabled, theme }) =>
    selected ?
      css`
        background: ${theme.black};
        color: #ffffff;
      `
    : disabled ?
      css`
        background: ${theme.gray0};
        color: ${theme.gray1};
      `
    : css`
        background: #ffffff;
        color: 'initial';
      `
  }
`;

export default CartModalInfo
