import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { flexAlignStart } from '../../Styles/theme';
import ListHeader from './components/ListHeader';
import ListFilter from './components/ListFilter/ListFilter';
import ListItemWrapper from './components/ListItemWrapper/ListItemWrapper';

const List = () => {
  const [filterOn, setFilterOn] = useState(true);
  const [sortMode, setSortMode] = useState('new');
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = useCallback(() => {
    const { pageYOffset } = window;
    setIsFixed(pageYOffset > 37)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll])

  return (
    <ListPage>
      <ListHeader sortMode={sortMode} setSortMode={setSortMode} filterOn={filterOn} setFilterOn={setFilterOn} />
      <ListMain>
        <ListFilter isFixed={isFixed} filterOn={filterOn} />
        <ListItemWrapper isFixed={isFixed} />
      </ListMain>
    </ListPage>
  )
}

const ListPage = styled.div`
  position: relative;
  height: 1500px;
`;

const ListMain = styled.div`
  position: absolute;
  top: 110px;
  ${flexAlignStart}
  width: 100%;
  height: 1400px;
  padding: 0 48px 20px 0;
`;

export default List
