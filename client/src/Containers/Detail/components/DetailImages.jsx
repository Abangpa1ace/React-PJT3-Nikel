import React from 'react'
import styled from 'styled-components'

const DetailImages = ({ images }) => {
  return (
    <DetailGridBox>
      {images && images.map((image, idx) =>
        <DetailGridImg>
          <img src={image} alt={`detail-img-${idx}`} />
        </DetailGridImg>  
      )}
    </DetailGridBox>
  )
}

const DetailGridBox = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  width: 991px;
  padding: 0 54px;
`;

const DetailGridImg = styled.li`
  width: 100%;
  height: 434px;
  background: #f6f6f6;

  img {
    width: 100%;
    height: 100%;
    transform: scale(0.8);
    object-fit: cover;
  }
`;

export default DetailImages
