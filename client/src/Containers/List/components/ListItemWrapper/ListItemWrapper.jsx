import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import itemsList_MOCK from '../../../../Data/data';

const ListItemWrapper = ({ isFixed, filterOn }) => {
  return (
    <ItemWrapper isFixed={isFixed} filterOn={filterOn}>
      {itemsList_MOCK.map(item => 
        <ListItem key={item.id} itemInfo={item} />)
      }
    </ItemWrapper>
  )
}

const ItemWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
  transition: ${({ theme }) => theme.transition};
  padding-left: ${({ isFixed, filterOn }) => !isFixed
    ? '0px'
    : filterOn
      ? '280px'
      : '48px'
  };
`;

export default ListItemWrapper
