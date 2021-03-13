import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import ListHeader from './components/ListHeader';
import ListFilter from './components/ListFilter/ListFilter';
import ListItemWrapper from './components/ListItemWrapper/ListItemWrapper';
import { loadItemList } from '../../Store/Action/itemListAction';

const List = () => {
  const [itemList, setItemList] = useState([]);
  const [isFixed, setIsFixed] = useState(false);
  const [filterOn, setFilterOn] = useState(true);
  const [sortMode, setSortMode] = useState('new');

  const itemListState = useSelector(state => state.itemList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItemList(window.location.pathname.slice(5), {}))
  }, [dispatch])

  useEffect(() => {
    setItemList(itemListState.list);
  }, [itemListState])

  const handleScroll = useCallback(() => {
    const { pageYOffset } = window;
    setIsFixed(pageYOffset > 37)

    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      dispatch(loadItemList(window.location.pathname.slice(5), {}))
      window.scrollTo(0, scrollTop-1)
    }
  }, [dispatch])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll])

  return (
    <ListPage>
      <ListHeader isFixed={isFixed} sortMode={sortMode} setSortMode={setSortMode} filterOn={filterOn} setFilterOn={setFilterOn} />
      <ListMain>
        <ListFilter isFixed={isFixed} filterOn={filterOn} />
        <ListItemWrapper itemList={itemList} isFixed={isFixed} filterOn={filterOn} />
      </ListMain>
    </ListPage>
  )
}

const ListPage = styled.div`
  position: relative;
  min-height: 100vh;
`;

const ListMain = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 0 48px 20px;
`;

export default List
