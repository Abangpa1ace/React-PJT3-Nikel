import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { flexAlign } from '../../../../Styles/theme';

const DetailInfoColors = ({ id, image, colors }) => {
  const colorsArr = [{
    id,
    image,
    code: colors.code,
    title: colors.title,
  }].concat(colors.otherColors);

  console.log(colorsArr)

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

  a {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 10px 0 0;
    
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
      z-index: -1;
    }
  }
`;

export default DetailInfoColors;
