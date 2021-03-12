import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { flexAlignStart } from '../../Styles/theme';
import DetailModal from  './components/DetailModal/DetailModal';
import DetailImages from './components/DetailImages';
import DetailInfo from './components/DetailInfo/DetailInfo';
import RecommendCarousel from '../../Components/RecommendCarousel/RecommendCarousel';

const Detail = () => {
  const detailId = Number(window.location.pathname.split("/").pop())
  const itemListState = useSelector(state => state.itemList);

  const [detailData, setDetailData] = useState({});
  const [modalMode, setModalMode] = useState('off');
  
  useEffect(() => {
    setDetailData(itemListState.list.find(item => item.id === detailId));
  }, [itemListState, detailId])

  return (
    <DetailPage modalMode={modalMode}>
      {modalMode !== 'off' && 
        <DetailModal {...detailData} modalMode={modalMode} setModalMode={setModalMode}/>
      }
      <DetailWrapper modalMode={modalMode} >
        <DetailImages images={detailData.images} />
        <DetailInfo {...detailData} setModalMode={setModalMode} />
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
