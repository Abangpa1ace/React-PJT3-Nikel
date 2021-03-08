import React from 'react';
import styled from  'styled-components';
import { flexBetween } from '../../../../Styles/theme';
import DetailInfoPurchase from './DetailInfoPurchase';
import DetailInfoExplain from './DetailInfoExplain';
import DetailInfoPickup from './DetailInfoPickup';
import DetailInfoReview from './DetailInfoReview';
import DetailInfoDelivery from './DetailInfoDelivery';
import DetailInfoReturn from './DetailInfoReturn';

const DetailInfo = ({ setModalMode, model, name, category, colors, price, sizes, explanation }) => {
  return (
    <Detailinfo>
      <InfoTitle>
        <p>
          <span>{category && Object.values(category).map(e => e.title).join(' ')}</span>
          <span className="bold">{price && `${price.toLocaleString()} 원`}</span>
        </p>
        <h1>{name}</h1>
      </InfoTitle>
      <DetailInfoPurchase setModalMode={setModalMode} sizes={sizes} />
      <DetailInfoPickup setModalMode={setModalMode} />
      <DetailInfoExplain model={model} colors={colors} explanation={explanation} />
      <DetailInfoReview />
      <DetailInfoDelivery />
      <DetailInfoReturn />
    </Detailinfo>
  )
}

const Detailinfo = styled.aside`
  position: sticky;
  top: 0;
  width: 385px;
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

export default DetailInfo;
