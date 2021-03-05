import React from 'react'
import styled, { css, keyframes } from 'styled-components';
import { Linker } from '../../../../Common/StyledCommon';
import { flexAlignStart } from '../../../../Styles/theme';
import { NAV_CATEGORIES } from '../../HeaderData';

const NavCategories = ({ isShown, navFocus, setNavFocus }) => {
  return (
    <Navcategories isShown={isShown}>
      <CategoryFilter isShown={isShown} onMouseEnter={() => setNavFocus(0)} />
      <CategoryMenu className={isShown ? 'show' : ''}>
        {navFocus > 0 && NAV_CATEGORIES.find(category => category.id === navFocus).secondary.map(sub => {
          return (
            <ul key={sub.id}>
              <Linker to={sub.link}><h4>{sub.title}</h4></Linker>
              {sub.tertiary.map(content => 
                <Linker to={content.link}><li key={content.id}>{content.title}</li></Linker>
              )}
            </ul>
          )  
          })}
      </CategoryMenu>
    </Navcategories>
  )
}

const Navcategories = styled.div`
  display: ${({ isShown }) => isShown ? 'block' : 'none'};
  width: 100%;
  position: absolute;
  z-index: 1000;
`;

const CategoryMenu = styled.nav`
  ${flexAlignStart};
  position: absolute;
  background: #ffffff;
  width: 100%;
  padding: 30px;
  z-index: 1000;
  transform: translateY(-50%);
  transition: all .3s ease;

  &.show {
    transform: translateY(0%);
  }

  ul {
    width: 220px;

    h4 {
      font-weight: 500;
      padding: 5px 0;
      margin: 0 0 10px;
    }

    li {
      padding: 5px 0;
      font-size: 14px;
      color: ${({ theme }) => theme.gray2};

      &:hover {
        color: initial;
      }
    }
  }
`;

const setBlur = keyframes`
  0% {
    opacity: 0;
    background: rgba(255, 255, 255, 0);
    backdrop-filter: blur(0px);
  }
  100% {
    opacity: 1;
    background: rgba(18, 18, 18, 0.15);
    backdrop-filter: blur(10px);
  }
`;

const CategoryFilter = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  animation: ${({ isShown }) => isShown && css`${setBlur} .5s ease forwards;`};
`;

export default NavCategories
