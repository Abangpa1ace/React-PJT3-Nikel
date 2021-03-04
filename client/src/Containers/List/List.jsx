import React, { useState } from 'react';
import styled from 'styled-components';
import ListHeader from './components/ListHeader';

const List = () => {
  const [filterOn, setFilterOn] = useState(false);
  const [sortMode, setSortMode] = useState('new');

  return (
    <ListPage>
      <ListHeader sortMode={sortMode} setSortMode={setSortMode} filterOn={filterOn} setFilterOn={setFilterOn} />
    </ListPage>
  )
}

const ListPage = styled.div`
  height: 1500px;
`;

export default List
