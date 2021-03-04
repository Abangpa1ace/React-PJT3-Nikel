import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import FilterBox from './FilterBox';
import { flexAlign } from '../../../../Styles/theme';
import { NAV_CATEGORIES } from '../../../../Components/Header/HeaderData';
import { FILTER_BRAND, FILTER_SIZE, FILTER_COLOR, FILTER_ICON, FILTER_USAGE, FILTER_WIDTH } from '../../ListData';

const ListFilter = ({ filterOn }) => {
  const [nowFilter, setNowFilter] = useState(202);

  return (
    <Listfilter filterOn={filterOn} >
      <FilterContainer>
        <FilterBox>
          {NAV_CATEGORIES[1].subCategories.map((ele) => {
            return (
              ele.id === nowFilter
                ? <>
                    <li key={ele.id} focused={ele.id === nowFilter}><Link to={ele.link}>{ele.title}</Link></li>
                    <SubCategories>{ele.list.map(sub_ele => <li key={sub_ele.id} focused={ sub_ele.id === nowFilter}><Link to={sub_ele.link}>{sub_ele.title}</Link></li>)}</SubCategories>
                  </>
                : <li key={ele.id} focused={ele.id === nowFilter}><Link to={ele.link}>{ele.title}</Link></li>
              )
          })}
        </FilterBox>
        <FilterBox title={FILTER_SIZE.title} gridCol="1fr 1fr 1fr 1fr" gridGap="5px">
          {FILTER_SIZE.list.map(ele =>
            <FilterSizeBtn key={ele}>{ele}</FilterSizeBtn>  
          )}
        </FilterBox>
        <FilterBox title={FILTER_COLOR.title} gridCol="1fr 1fr 1fr" gridGap="3px 0">
          {FILTER_COLOR.list.map(ele =>
            <FilterColorBtn key={ele.color}>
              <div className="color-circle" style={{ background: `${ele.hex}`}}/>
              <p>{ele.title}</p>
            </FilterColorBtn>  
          )}
        </FilterBox>
        <FilterBox title={FILTER_BRAND.title} >
          {FILTER_BRAND.list.map(ele =>
            <li key={ele.id}>{ele.title}</li>  
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
  height: 100%;
  padding: 0 48px;
  transition: ${({ theme }) => theme.transition};
  ${({ filterOn }) => filterOn
    ? css`
      width: 300px;
      visibility: visible;
      opacity: 1;
    `
    : css`
      width: 0;
      visibility: hidden;
      opacity: 0;
      padding: 0 0 0 48px;
    `
  }
`;

const FilterContainer = styled.div`
  width: 200px;
  height: 100%;
`;

const SubCategories = styled.ul`
  li {
    padding-left: 15px;
  }
`;

const FilterSizeBtn = styled.li`
  text-align: center;
  border: 1px solid ${({ theme }) => theme.gray0C};
  border-radius: 5px;
  font-size: 13px;

  &:hover {
    opacity: 1;
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
