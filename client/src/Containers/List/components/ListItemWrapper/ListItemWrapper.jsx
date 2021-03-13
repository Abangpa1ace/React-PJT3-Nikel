import React from 'react';
import styled, { css } from 'styled-components';
import ListItem from './ListItem';

const ListItemWrapper = ({ itemList, isFixed, filterOn }) => {
  return (
    <ItemWrapper isFixed={isFixed} filterOn={filterOn}>
      {itemList.map(item => 
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
  /* padding-left: ${({ isFixed, filterOn }) => filterOn
    ? isFixed ? '300px' : '0px'
    : '48px'
  }; */
  ${({ filterOn }) => filterOn
    ? css`
      padding-left: 300px;
      transition: ${({ theme }) => theme.transition};
    `
    : css`
      padding-left: 48px;
      transition: ${({ theme }) => theme.transition};
    `
  }
`;

// const toWide = keyframes`
//   from {
//     padding-left:
//   }
// `;

export default ListItemWrapper
