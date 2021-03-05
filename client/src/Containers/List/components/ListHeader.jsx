import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { Button } from '../../../Common/StyledCommon';
import { flexCenter, flexBetween } from '../../../Styles/theme';
import { FaList } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';

const ListHeader = ({ isFixed, filterOn, setFilterOn, sortMode, setSortMode }) => {
  const [pageY, setPageY] = useState(0);
  const [headerUp, setHeaderUp] = useState(false);
  const [sortOn, setSortOn] = useState(false);
  const sortModeList = {
    'new': '신상품순',
    'expensive': '높은 가격순',
    'cheap': '낮은 가격순',
  };

  const handleScroll = useCallback(() => {
    const { pageYOffset } = window;
    setPageY(pageYOffset);
    setHeaderUp(pageYOffset > 36 && pageYOffset > pageY);
  }, [pageY]);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll])

  return (
    <Listheader isFixed={isFixed} isUp={headerUp} >
      <div>
        <p>Men</p>
        <h2>Men's 신발</h2>
      </div>
      <aside>
        <Button onClick={() => setFilterOn(!filterOn)}>
          <span>FILTER</span>
          <SvgWrapper isRotate={filterOn}><FaList /></SvgWrapper>
        </Button>
        <Button onClick={() => setSortOn(!sortOn)}>
          <span>{sortModeList[sortMode]}</span>
          <SvgWrapper isRotate={sortOn}><IoIosArrowUp /></SvgWrapper>
        </Button>
        {sortOn && <SortModal>
          {Object.entries(sortModeList).map((mode) => 
            <li onClick={() => setSortMode(mode[0])}><span>{mode[1]}</span></li>
          )}
        </SortModal>}
      </aside>
    </Listheader>
  )
}

const Listheader = styled.header`
  ${flexBetween};
  width: 100%;
  padding: 30px 48px;
  background: #ffffff;
  transform: ${({ isUp }) => isUp ? 'translateY(-60px)': 'translateY(00px)'};
  transition: ${({ theme }) => theme.transition};
  z-index: 900;

  h2 {
    transition: ${({ theme }) => theme.transition};
  }
  ${({ isFixed }) => isFixed
    ? css`
      position: fixed;
      top: 60px;
      left: 0;
      
      div {
        p { 
          display: none; 
        }
        h2 {
          font-size: 18px;
          font-weight: normal;
        }
      }
    `
    : css`
      position: relative;

      div {
        p {
          margin: 0 0 10px;
        }
        h2 {
          font-size: 24px;
          font-weight: 500;
        }
      }
    `};

  div {

  }

  aside {
    ${flexCenter};
    position: relative;

    button {
      margin: 0 0 0 25px;
      &:hover { opacity: 0.5 };
    }
  }

  span {
    font-size: 16px;
  }
`;

const SvgWrapper = styled.div`
  margin: 0 0 0 7px;
  transform: ${({ isRotate }) => isRotate ? 'rotate(0deg)' : 'rotate(180deg)'};
`;

const SortModal = styled.ul`
  position: absolute;
  top: 30px;
  right: 0;
  width: 200px;
  padding: 10px 30px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 3px 3px 5px 3px ${({ theme }) => theme.gray0};
  text-align: right;
  z-index: 100;

  li {
    padding: 15px 0;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
`;

export default ListHeader


