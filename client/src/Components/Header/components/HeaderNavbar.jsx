import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { Linker } from '../../../Common/StyledCommon';
import { flexAlign, flexBetween } from '../../../Styles/theme';
import NavMenu from './Navbar/NavMenu';
import NavTools from './Navbar/NavTools';
import NavCategories from './Navbar/NavCategories';

const HeaderNavbar = ({ setSearchOn }) => {
  const [pageY, setPageY] = useState(0);
  const [navHide, setNavHide] = useState(false);
  const [navFocus, setNavFocus] = useState(0);

  const handleScroll = useCallback(() => {
    const { pageYOffset } = window;
    setPageY(pageYOffset);
    setNavHide(pageYOffset > 36 && pageYOffset > pageY);
  }, [pageY]);

  const exitCategories = () => {
    setNavFocus(0);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pageY, handleScroll])

  return (
    <Headernavbar isFixed={window.pageYOffset > 36} isHide={navHide}>
      <NavWrapper>
        <NavLogo to="/">
          <img src="./Images/logo-nike.png" alt="logo-nike" onMouseEnter={exitCategories}/>
        </NavLogo>
        <NavMenu navFocus={navFocus} setNavFocus={setNavFocus} />
        <NavTools setSearchOn={setSearchOn} exitCategories={exitCategories} />
      </NavWrapper>
      <NavCategories isShown={navFocus !== 0} navFocus={navFocus} setNavFocus={setNavFocus}/>
    </Headernavbar>
  )
}

const Headernavbar = styled.div`
  width: 100%;
  background: #ffffff;
  transform: ${({ isHide }) => isHide ? 'translateY(-100%)': 'translateY(0%)'};
  transition: ${({ theme }) => theme.transition};
  z-index: 1000;
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
