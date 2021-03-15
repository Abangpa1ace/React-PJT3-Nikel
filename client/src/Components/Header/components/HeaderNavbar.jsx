import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { Linker } from '../../../Common/StyledCommon';
import useScroll from '../../../Hooks/useScroll';
import NavMenu from './Navbar/NavMenu';
import NavTools from './Navbar/NavTools';
import NavCategories from './Navbar/NavCategories';
import { flexAlign, flexBetween } from '../../../Styles/theme';

const HeaderNavbar = ({ setSearchOn }) => {
  const [navFocus, setNavFocus] = useState(0);
  const [focusChange, setFocusChange] = useState(false);
  const scrollBelow = useScroll();

  const exitCategories = () => {
    setNavFocus(0);
  }

  return (
    <Headernavbar isFixed={window.pageYOffset > 36} isHide={scrollBelow}>
      <NavWrapper>
        <NavLogo to="/">
          <img src="/Images/logo-nike.png" alt="logo-nike" onMouseEnter={exitCategories}/>
        </NavLogo>
        <NavMenu navFocus={navFocus} setNavFocus={setNavFocus} setFocusChange={setFocusChange} />
        <NavTools setSearchOn={setSearchOn} exitCategories={exitCategories} />
      </NavWrapper>
      <NavCategories isShow={navFocus !== 0} focusChange={focusChange} navFocus={navFocus} setNavFocus={setNavFocus}/>
    </Headernavbar>
  )
}

const Headernavbar = styled.div`
  width: 100%;
  background: #ffffff;
  transform: ${({ isHide }) => isHide ? 'translateY(-100%)': 'translateY(0%)'};
  transition: ${({ theme }) => theme.transition};
  z-index: ${({ theme }) => theme.z_Navbar};

  ${({ isFixed }) => isFixed
    ? css`
      position: fixed;
      top: 0;
    `
    : css`
      position: relative;
    `};
`;

const NavWrapper = styled.nav`
  ${flexBetween};
  height: 60px;
  padding: 0 48px;
`;

const NavLogo = styled(Linker)`
  ${flexAlign};
  width: 30%;

  img {
    width: 60px;
    transform: scaleX(-1);
    &:hover {
      opacity: 0.5;
    }
  }
`;

export default HeaderNavbar
