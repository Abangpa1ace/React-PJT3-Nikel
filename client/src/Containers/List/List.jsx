import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import ListHeader from './components/ListHeader';
import ListFilter from './components/ListFilter/ListFilter';
import ListItemWrapper from './components/ListItemWrapper/ListItemWrapper';
import { loadItemList } from '../../Store/Action/itemListAction';
import { ITEMS_API } from '../../Data/config';
import { flexAlignStart } from '../../Styles/theme';
import itemsList_MOCK from '../../Data/data';

const List = () => {
  const [filterOn, setFilterOn] = useState(true);
  const [sortMode, setSortMode] = useState('new');
  const [isFixed, setIsFixed] = useState(false);
  const [itemList, setItemList] = useState(itemsList_MOCK);

  const dispatch = useDispatch();

  const handleScroll = useCallback(() => {
    const { pageYOffset } = window;
    setIsFixed(pageYOffset > 37)

    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setItemList(itemList.concat(itemsList_MOCK))
    }
  }, [itemList])

  useEffect(() => {
    dispatch(loadItemList(window.location.pathname.slice(5), {}))
  }, [])

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
`;

const ListMain = styled.div`
  position: absolute;
  top: 110px;
  ${flexAlignStart}
  width: 100%;
  padding: 0 48px 20px 0;
`;

export default List
