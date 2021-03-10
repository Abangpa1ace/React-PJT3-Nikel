import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import CartModalInfo from './CartModalInfo';
import { flexAlignStart } from '../../../../Styles/theme';
import CartModalImages from './CartModalImages';

const CartModal = ({ isModalOn, setIsModalOn, editItem }) => {
  const { images } = editItem

  return (
    <Cartmodal isModalOn={isModalOn}>
      <ModalCloser onClick={() => setIsModalOn(false)}/>
      <ModalBox isModalOn={isModalOn}>
        <button className="close-btn" onClick={() => setIsModalOn(false)}>X</button>
        <CartModalImages images={images} />
        <CartModalInfo />
      </ModalBox>
    </Cartmodal>
  )
}

const Cartmodal = styled.div`
  display: ${({ isModalOn }) => isModalOn ? 'flex' : 'none'};
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  z-index: 1000;
`;

const modalDown = keyframes`
  from { transform: translateY(-30%); }
  to { transform: translateY(0%); }
`;

const ModalBox = styled.div`
  ${flexAlignStart}
  width: 950px;
  position: relative;
  margin: 100px 0;
  padding: 50px 60px;
  background: #ffffff;
  border-radius: 5px;
  z-index: 1000;
  /* ${({ isShow }) => isShow 
    && css`
      animation: ${modalDown} .3s ease forwards;
    `
  }; */
  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 16px;
    &:hover { opacity: 0.5 };
  }
`;

const ModalCloser = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default CartModal