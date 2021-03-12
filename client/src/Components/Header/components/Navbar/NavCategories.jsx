import React from 'react'
import styled, { css, keyframes } from 'styled-components';
import { flexAlignStart } from '../../../../Styles/theme';
import { NAV_CATEGORIES } from '../../HeaderData';

const NavCategories = ({ isShow, focusChange, navFocus, setNavFocus }) => {

  const setCategory = (navFocus) => {
    const { code, secondary } = NAV_CATEGORIES.find(category => category.id === navFocus);
    return (
      <>
        {secondary.map(second => 
          <ul key={second.id}>
            <a href={`/list/${code}/${second.code}`}
              ><h4>{second.title}</h4></a>
            {second.tertiary.map(third => 
              <a href={`/list/${code}/${second.code}/${third.code}`}><li key={third.id}>{third.title}</li></a>
            )}
          </ul>
        )}
      </>
    )
  }

  return (
    <Navcategories isShow={isShow}>
      <CategoryFilter isShow={isShow} onMouseEnter={() => setNavFocus(0)} />
      {navFocus > 0 && <CategoryMenu isShow={isShow} focusChange={focusChange} >
        {setCategory(navFocus)}
      </CategoryMenu>}
    </Navcategories>
  )
}

// animations declaration
const setDown = keyframes`
  from {
    visibility: hidden;
    opacity: 0;
    transform: translateY(-20%);
  }
  to {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
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

const Navcategories = styled.div`
  display: ${({ isShow }) => isShow ? 'block' : 'none'};
  width: 100%;
  position: relative;
  z-index: ${({ theme }) => theme.z_Navbar_under};
`;

const CategoryMenu = styled.nav`
  ${flexAlignStart};
  position: absolute;
  background: #ffffff;
  width: 100%;
  padding: 30px;
  z-index: ${({ theme }) => theme.z_Navbar};
  ${({ focusChange }) => focusChange && css`animation: ${setDown} .5s ease forwards;`};
  
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

const CategoryFilter = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: ${({ theme }) => theme.z_Navbar};
  ${({ isShow }) => isShow && css`animation: ${setBlur} 1s ease forwards;`};
`;

export default NavCategories
