import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { flexAlignStart } from '../../Styles/theme';
import DetailModal from  './components/DetailModal/DetailModal';
import DetailImages from './components/DetailImages';
import DetailInfo from './components/DetailInfo/DetailInfo';
import DetailRecommend from './components/DetailRecommend';

const Detail = () => {
  const detailId = Number(window.location.pathname.split("/").pop())
  const itemListState = useSelector(state => state.itemList);

  const [detailData, setDetailData] = useState({});
  const [modalMode, setModalMode] = useState('off');
  
  useEffect(() => {
    setDetailData(itemListState.list.find(item => item.id === detailId));
  }, [])

  return (
    <DetailPage>
      {modalMode !== 'off' && <DetailModal modalMode={modalMode} setModalMode={setModalMode}/>}
      <DetailWrapper>
        <DetailImages images={detailData.images} />
        <DetailInfo {...detailData} setModalMode={setModalMode} />
      </DetailWrapper>
      <DetailRecommend />
    </DetailPage>
  )
}

const DetailPage = styled.div`
`;

const DetailWrapper = styled.main`
  ${flexAlignStart};
  max-width: ${({ theme }) => theme.detailWidth};
  margin: 60px auto 0;
`;

export default Detail
