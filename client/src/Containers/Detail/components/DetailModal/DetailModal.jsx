import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { flexCenter } from '../../../../Styles/theme';

const DetailModal = ({ modalMode, setModalMode }) => {
  return (
    <Detailmodal modalMode={modalMode} >
      <ModalBox isShow={modalMode !== 'off'} >
        <button className="close-btn" onClick={() => setModalMode('off')}>X</button>
      </ModalBox>
    </Detailmodal>
  )
}

const Detailmodal = styled.div`
  ${flexCenter};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1000;
`;

const modalDown = keyframes`
  from { transform: translateY(-30%); }
  to { transform: translateY(0%); }
`;

const ModalBox = styled.div`
  position: relative;
  width: 1000px;
  height: 80%;
  background: #ffffff;
  border-radius: 5px;
  ${({ isShow }) => isShow &&
    css` animation: ${modalDown} .3s ease forwards`};
  ;

  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 16px;
    &:hover { opacity: 0.5 };
  }
`;

export default DetailModal
