import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListItem = ({ itemInfo }) => {
  const { id, images, name, category, sizes, colors, price } = itemInfo;
  const { primary, secondary, tertiary } = category;
  const { cord, otherColors } = colors;

  return (
    <Listitem to={`/details/${id}`} >
      <img src={images[0]} alt={`${primary.title}-${name}-${cord}`} />
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
                <Link to={`/detail/${color.id}`}>
                  <img src={color.image} alt={`${primary.title}-${name}-${color.cord}`} />
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
  margin: 0 0 50px;

  img {
    width: 100%;
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
  color: ${({ theme }) => theme.gray2};
`;


export default ListItem
