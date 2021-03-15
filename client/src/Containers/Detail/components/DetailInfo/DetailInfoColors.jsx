import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DetailInfoColors = ({ id, image, colors }) => {
  const colorsArr = [{
    id,
    image,
    code: colors.code,
    title: colors.title,
  }].concat(colors.otherColors);

  return (
    <InfoColors>
      {colorsArr.map((color, idx) => 
        <Link to={`/detail/${id}`} className={idx === 0 ? 'focus' : ''}>
          <img src={color.image} alt={`detail-colors-${color.code}`} />
        </Link>
      )}
    </InfoColors>
  )
}

const InfoColors = styled.section`
  width: 100%;
  margin: 0 0 30px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 7px;

  a {
    position: relative;
    
    &.focus::after, &:hover:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: ${({ theme }) => theme.z_OneDown};
    }
  }
`;

export default DetailInfoColors;
