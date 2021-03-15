import React from 'react'
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import FilterBox from './FilterBox';
import { NAV_CATEGORIES } from '../../../../Components/Header/HeaderData';
import { FILTER_BRAND, FILTER_SIZE, FILTER_COLOR, FILTER_ICON, FILTER_USAGE, FILTER_WIDTH } from '../../ListData';
import { filterItemList } from '../../../../Store/Action/itemListAction';

const ListFilter = ({ isFixed, filterOn }) => {
  const itemListState = useSelector(state => state.itemList);
  const dispatch = useDispatch();
  
  const firstPath = window.location.pathname.split("/")[2];
  const secondPath = window.location.pathname.split("/")[3];
  const thirdPath = window.location.pathname.split("/")[4];

  const setCategoryFilter = () => {
    const primary = NAV_CATEGORIES.find(category => category.code === firstPath);
    return (
      primary.secondary.map((ele) => {
      const { id, title, code, tertiary} = ele;
        return (
            <>
              <li key={id}>
                <a href={`/list/${primary.code}/${code}`}>{title}</a>
              </li>
              {code === secondPath && 
                <SubCategories>
                  {tertiary.map((sub_ele) => {
                    return (
                      <li key={sub_ele.id} className={sub_ele.code === thirdPath ? 'focus' : ''}>
                        <a href={`/list/${primary.code}/${code}/${sub_ele.code}`}>
                          {sub_ele.title}
                        </a>
                      </li>
                    )
                  })}
                </SubCategories>}
            </>
          )
      })
    )
  }

  const fetchFilter = (name, value) => {
    let query = itemListState.query ? itemListState.query : {};
    if (query[name]) {
      query[name] = query[name].includes(value) ? query[name].filter(v => v !== value) : [...query[name], value];
    }
    else {
      query[name] = [value];
    };
    dispatch(filterItemList(query))
  }

  return (
    <Listfilter filterOn={filterOn} isFixed={isFixed}>
      <FilterContainer>
        <FilterBox>
          {setCategoryFilter()}
        </FilterBox>
        <FilterBox title={FILTER_SIZE.title} gridCol="1fr 1fr 1fr 1fr" gridGap="5px">
          {FILTER_SIZE.list.map(ele =>
            <FilterSizeBtn key={ele}>{ele}</FilterSizeBtn>  
          )}
        </FilterBox>
        <FilterBox title={FILTER_COLOR.title} gridCol="1fr 1fr 1fr" gridGap="3px 0">
          {FILTER_COLOR.list.map(ele =>
            <FilterColorBtn key={ele.color} onClick={() => fetchFilter("color", ele.color)} >
              <div className="color-circle" style={{ background: `${ele.hex}`}}/>
              <p>{ele.title}</p>
            </FilterColorBtn>  
          )}
        </FilterBox>
        <FilterBox title={FILTER_BRAND.title} >
          {FILTER_BRAND.list.map(ele =>
            <li key={ele.id} onClick={() => fetchFilter("brand", ele.code)}>{ele.title}</li>  
          )}
        </FilterBox>
        <FilterBox title={FILTER_ICON.title}>
          {FILTER_ICON.list.map(ele =>
            <li key={ele.id}>{ele.title}</li>  
          )}
        </FilterBox>
        <FilterBox title={FILTER_USAGE.title}>
          {FILTER_USAGE.list.map(ele =>
            <li key={ele.id}>{ele.title}</li>  
          )}
        </FilterBox>
        <FilterBox title={FILTER_WIDTH.title}>
          {FILTER_WIDTH.list.map(ele =>
            <li key={ele.id}>{ele.title}</li>  
          )}
        </FilterBox>
      </FilterContainer>
    </Listfilter>
  )
}

const Listfilter = styled.aside`
  position: absolute;
  padding: 0 48px;
  background: #ffffff;
  transform: translateX(-100%);
  transition: ${({ theme }) => theme.transition};
  z-index: ${({ theme }) => theme.z_OneUp};
  
  ${({ filterOn }) => filterOn
    ? css`
      visibility: visible;
      transform: translateX(-48px);
    `
    : css`
      visibility: hidden;
      transform: translateX(-100%);
    `
  }
  ${({ isFixed }) => isFixed
    ? css`
      position: fixed;
      top: 0;
      left: 48px;
      bottom: 0px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        display: none;
      }
    `
    : css`
      position: absolute;
    `
  }
`;

const FilterContainer = styled.div`
  width: 204px;
  height: 100%;
`;

const SubCategories = styled.ul`
  li {
    padding-left: 15px;

    &.focus {
      background: ${({ theme }) => theme.gray0};
      a { font-weight: 900; };
    }
  }
`;

const FilterSizeBtn = styled.li`
  text-align: center;
  border: 1px solid ${({ theme }) => theme.gray0C};
  border-radius: 5px;
  font-size: 13px;

  &:hover {
    color: initial;
    border: 1px solid ${({ theme }) => theme.gray3};
  }
`;

const FilterColorBtn = styled.li`
  text-align: center;

  .color-circle {
    width: 25px;
    height: 25px;
    margin: 0 auto 10px;
    border: 1px solid ${({ theme }) => theme.gray1};
    border-radius: 50%;
  }

  p {
    font-size: 12px;
  }
`;

export default ListFilter;
