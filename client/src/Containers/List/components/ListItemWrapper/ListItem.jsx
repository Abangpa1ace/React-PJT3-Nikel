import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListItem = ({ itemInfo }) => {
  const { id, images, name, category, sizes, colors, price } = itemInfo;
  const { primary, secondary, tertiary } = category;
  const { code, otherColors } = colors;

  const [image, setImage] = useState('');

  return (
    <Listitem to={`/details/${id}`} >
      <img src={image || images[0]} alt={`${primary.title}-${name}-${code}`} />
      <ListItemInfo>
        <ItemInfoMain>
          <div>
            {Object.values(sizes).reduce((acc, cur) => acc + cur) === 0 && <p className="sold-out">품절</p>}
            <p>{name}</p>
          </div>
          <p>{price.toLocaleString()} 원</p>
        </ItemInfoMain>
        <ItemInfoSub>
          {`${primary.title} ${secondary.title} ${tertiary.title}`}
        </ItemInfoSub>
        <ItemInfoSub>
          {otherColors.length+1} 컬러
          <ItemInfoColors>
            {otherColors.map((color) => {
              return (
                <Link to={`/detail/${color.id}`} 
                  onMouseOver={() => setImage(color.image)}
                  onMouseOut={() => setImage('')}
                >
                  <img src={color.image} alt={`${primary.title}-${name}-${color.code}`} />
                </Link>
              )
            })}
          </ItemInfoColors>
        </ItemInfoSub>
      </ListItemInfo>
    </Listitem>
  )
}

const ItemInfoColors = styled.div`
  display: none;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: -25px;
  left: 0;
  z-index: 50;

  a {
    width: 40px;
    height: 40px;
    margin: 0 10px 0 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Listitem = styled(Link)`
  padding: 0 0 20px;
  margin: 0 0 20px;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  &:hover {
    ${ItemInfoColors} { 
      display: flex;
    };
  }
`;

const ListItemInfo = styled.section`
  padding: 10px 0 0;
`;

const ItemInfoMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  p.sold-out { 
    margin: 0 0 10px;
    color: ${({ theme }) => theme.redError};
  }
`;

const ItemInfoSub = styled.p`
  position: relative;
  margin: 10px 0 0;
  color: ${({ theme }) => theme.gray1};
`;


export default ListItem
