import React from 'react';
import styled from  'styled-components';
import { flexBetween } from '../../../../Styles/theme';
import InfoPurchase from './InfoPurchase';
import InfoExplain from './InfoExplain';
import InfoPickup from './InfoPickup';
import InfoFoldable from './InfoFoldable';
import InfoColors from './InfoColors';

const DetailInfo = ({ 
  setModalMode, id, images, model, name, category, 
  colors, price, sizes, explanation, review }) => {

  return (
    <Detailinfo>
      <InfoTitle>
        <p>
          <span>{category && Object.values(category).map(e => e.title).join(' ')}</span>
          <span className="bold">{price && `${price.toLocaleString()} 원`}</span>
        </p>
        <h1>{name}</h1>
      </InfoTitle>
      {(colors && colors.otherColors) && <InfoColors id={id} image={images[0]} colors={colors} />}
      <InfoPurchase setModalMode={setModalMode} sizes={sizes}
        id={id}
        images={images}
        model={model}
        name={name}
        category={category}
        price={price}
        />
      <InfoPickup setModalMode={setModalMode} />
      <InfoExplain model={model} colors={colors} explanation={explanation} />
      <InfoFoldable review={review} />
    </Detailinfo>
  )
}

const Detailinfo = styled.aside`
  position: sticky;
  top: 0;
  width: 30%;
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
