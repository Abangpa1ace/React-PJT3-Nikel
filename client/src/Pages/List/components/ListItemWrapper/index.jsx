import React from 'react';
import styled, { css } from 'styled-components';
import ListItem from './ListItem';

const ListItemWrapper = ({ itemList, isFixed, filterOn }) => {
  return (
    <ItemWrapper isFixed={isFixed} filterOn={filterOn}>
      {itemList && itemList.map(item => 
        <ListItem key={item.id} itemInfo={item} />)
      }
    </ItemWrapper>
  )
}

const ItemWrapper = styled.main`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin: 0 0 50px 0;
  transition: ${({ theme }) => theme.transition};
  ${({ filterOn }) => filterOn
    ? css`
      padding-left: 252px;
    `
    : css`
      padding-left: 0px;
      transition: ${({ theme }) => theme.transition};
    `
  }
`;

export default ListItemWrapper
