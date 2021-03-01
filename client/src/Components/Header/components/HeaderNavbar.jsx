import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Linker } from '../../../Common/StyledCommon';
import { flexAlign, flexBetween } from '../../../Styles/theme';
import NavMenu from './Navbar/NavMenu';
import NavTools from './Navbar/NavTools';
import NavCategories from './Navbar/NavCategories';

const HeaderNavbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [navFocus, setNavFocus] = useState(0);

  const handleNavFixed = () => {
    const { pageYOffset } = window;
    let fixed = pageYOffset > 30;
    setIsFixed(fixed);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleNavFixed);
    return () => window.removeEventListener('scroll', handleNavFixed);
  }, [])

  return (
    <Headernavbar isFixed={isFixed}>
      <NavWrapper>
        <NavLogo to="/">
          <img src="./Images/logo-nike.png" alt="logo-nike" />
        </NavLogo>
        <NavMenu navFocus={navFocus} setNavFocus={setNavFocus} />
        <NavTools />
      </NavWrapper>
      <NavCategories isShown={navFocus !== 0} navFocus={navFocus} setNavFocus={setNavFocus}/>
    </Headernavbar>
  )
}

const Headernavbar = styled.div`
  width: 100%;
  transition: ${({ theme }) => theme.transition};

  ${({ isFixed }) => isFixed
    ? css`
      position: fixed;
      top: 0;
      transform: translateY(0%);
    `
    : css`
      position: block;
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
