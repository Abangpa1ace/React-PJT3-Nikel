import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { flexAlignStart } from '../../../../Styles/theme';
import ModalNotify from './ModalNotify';
import ModalPickup from './ModalPickup';
import ModalSizeGuide from './ModalSizeGuide';

const DetailModal = ({ modalMode, setModalMode }) => {
  const ModalComp = {
    off: null,
    size: <ModalSizeGuide />,
    pickup: <ModalPickup />,
    notify: <ModalNotify />,
  }


  return (
    <Detailmodal modalMode={modalMode}>
      <ModalCloser onClick={() => setModalMode('off')}/>
      <ModalBox isShow={modalMode !== 'off'} >
        <button className="close-btn" onClick={() => setModalMode('off')}>X</button>
        {modalMode !== 'off' && ModalComp[modalMode]}
      </ModalBox>
    </Detailmodal>
  )
}

const Detailmodal = styled.div`
  ${flexAlignStart};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  z-index: ${({ theme }) => theme.z_Modal_under};
`;

const modalDown = keyframes`
  from { transform: translateY(-30%); }
  to { transform: translateY(0%); }
`;

const ModalBox = styled.div`
  margin: 100px 0;
  min-width: 400px;
  background: #ffffff;
  border-radius: 5px;
  z-index: ${({ theme }) => theme.z_Modal};

  ${({ isShow }) => isShow 
    && css`
      animation: ${modalDown} .3s ease forwards;
    `
  };

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

export default DetailModal
