import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import itemsList_MOCK from '../../../../Data/data';

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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  transition: ${({ theme }) => theme.transition};
  padding-left: ${({ isFixed, filterOn }) => filterOn
    ? isFixed ? '300px' : '0px'
    : '48px'
  };
`;

export default ListItemWrapper
