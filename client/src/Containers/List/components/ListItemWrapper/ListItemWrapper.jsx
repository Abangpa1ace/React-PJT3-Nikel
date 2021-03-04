import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import itemsList_MOCK from '../../../../Data/data';

const ListItemWrapper = ({ isFixed }) => {
  return (
    <ItemWrapper isFixed={isFixed}>
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
  padding-left: ${({ isFixed }) => isFixed ? '300px' : '0px'};
`;

export default ListItemWrapper
