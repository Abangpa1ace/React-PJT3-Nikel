import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { loadDetail } from '../../Store/Action/detailAction'; 
import DetailModal from  './components/DetailModal/DetailModal';
import DetailImages from './components/DetailImages';
import DetailInfo from './components/DetailInfo/DetailInfo';
import RecommendCarousel from '../../Components/RecommendCarousel/RecommendCarousel';
import { flexAlignStart } from '../../Styles/theme';

const Detail = () => {
  const detailState = useSelector(state => state.detail);
  const dispatch = useDispatch();
  const detailId = Number(window.location.pathname.split("/").pop())

  const [modalMode, setModalMode] = useState('off');
  
  useEffect(() => {
    dispatch(loadDetail(detailId));
  }, [])

  return (
    <DetailPage modalMode={modalMode}>
      {modalMode !== 'off' && 
        <DetailModal {...detailState.item} modalMode={modalMode} setModalMode={setModalMode}/>
      }
      <DetailWrapper modalMode={modalMode} >
        <DetailImages {...detailState.item} />
        <DetailInfo {...detailState.item} setModalMode={setModalMode} />
      </DetailWrapper>
      <RecommendCarousel />
    </DetailPage>
  )
}

const DetailPage = styled.div`
  ${({ modalMode }) => modalMode !== 'off'
    && css`
      position: relative;
      height: 90vh;
      overflow-y: auto;
    `
  }
`;

const DetailWrapper = styled.main`
  ${flexAlignStart};
  max-width: ${({ theme }) => theme.detailWidth};
  margin: 40px auto 0;
  padding: 40px;
`;

export default Detail
