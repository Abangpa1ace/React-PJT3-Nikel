import React, { useState, useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { loadDetail } from '../../../../Store/Action/detailAction';
import ModalInfos from './ModalInfos';
import ModalImages from './ModalImages';
import { flexAlignStart } from '../../../../Styles/theme';

const CartModal = ({ isModalOn, setIsModalOn, editItem, setEditItem }) => {

  const detailState = useSelector(state => state.detail);
  const dispatch = useDispatch();
  const [editItemData, setEditItemData] = useState({});

  useEffect(() => {
    dispatch(loadDetail(editItem.id))
  }, [editItem.id])

  useEffect(() => {
    if (detailState.item) {
      setEditItemData(detailState.item);
    }
  }, [detailState])


  const closeModal = () => {
    setIsModalOn(false)
  }

  return (
    <Cartmodal isModalOn={isModalOn}>
      <ModalCloser onClick={closeModal}/>
      <ModalBox isModalOn={isModalOn} >
        <button className="close-btn" onClick={closeModal}>X</button>
        <ModalImages images={editItemData.images} />
        <ModalInfos editItemData={editItemData} editItem={editItem} setEditItem={setEditItem} closeModal={closeModal} />
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
  z-index: ${({ theme }) => theme.z_Modal_under};
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
  z-index: ${({ theme }) => theme.z_Modal};
  ${({ isModalOn }) => isModalOn
    ? css`
      animation: ${modalDown} .4s ease forwards;
    `
    : css`
      animation: ${modalDown} .4s ease reverse forwards;
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

export default CartModal