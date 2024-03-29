import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { flexBetween } from '../../../../Styles/theme';
import { IoIosArrowUp } from 'react-icons/io';

const FilterFoldBox = ({ children, title, gridCol, gridGap }) => {
  const [isFold, setIsFold] = useState(false);
  return (
    <FoldBox>
      {title && <FoldBoxTitle onClick={() => setIsFold(!isFold)}>
        <h4>{title}</h4>
        <SvgWrapper isFold={isFold}><IoIosArrowUp /></SvgWrapper>
      </FoldBoxTitle>}
      <FoldBoxCategories isFold={isFold} gridCol={gridCol} gridGap={gridGap} >
        {children}
      </FoldBoxCategories>
    </FoldBox>
  )
}

const FoldBox = styled.section`
  padding: 20px 0;
  background: #ffffff;
  border-top: 1px solid ${({ theme }) => theme.gray1};
`;

const FoldBoxTitle = styled.div`
  ${flexBetween};
  cursor: pointer;

  h4 {
    font-weight: 700;
  }
`;

const SvgWrapper = styled.span`
  transform: ${({ isFold }) => isFold ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const FoldBoxCategories = styled.ul`
  display: grid;
  grid-template-columns: ${({ gridCol }) => gridCol || '1fr'};
  grid-gap: ${({ gridGap }) => gridGap || '0'};
  transition: ${({ theme }) => theme.transition};
  overflow: hidden;
  ${({ isFold }) => !isFold
    ? css`
      height: 100%;
      visibility: visible;
      opacity: 1;
      margin: 20px 0 10px;
    `
    : css`
      height: 0;
      visibility: hidden;
      opacity: 0;
    `
  };

  li {
    padding: 10px 0;
    font-weight: ${({ focused }) => focused ? '700' : '400'};
    cursor: pointer;

    &:hover, &:hover a { 
      color: ${({ theme }) => theme.gray2};
    };
  }
`;

export default FilterFoldBox;
