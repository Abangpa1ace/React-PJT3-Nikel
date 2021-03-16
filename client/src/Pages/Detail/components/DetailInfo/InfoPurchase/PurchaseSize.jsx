import React from 'react';
import styled, { css } from 'styled-components';
import { flexCenter } from '../../../../../Styles/theme';

const PurchaseSize = ({ sizes, selectSize, clickSize, sizeAlert }) => {
  return (
    <Purchasesize sizeAlert={sizeAlert}>
      {sizes && Object.entries(sizes).map(size => 
        <li key={size[1]}>
          <SizeButton
            selected={size[0] === selectSize}
            disabled={size[1] === 0}
            onClick={() => clickSize(size[0])}
          >{size[0]}</SizeButton>
        </li>
      )}
    </Purchasesize>
  )
}

const Purchasesize = styled.ul`
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

export default PurchaseSize;
