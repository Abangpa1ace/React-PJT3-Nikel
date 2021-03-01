import React from 'react';
import styled from 'styled-components';
import HeaderUserMenu from './components/HeaderUserMenu';
import HeaderNavbar from './components/HeaderNavbar'

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderUserMenu />
      <HeaderNavbar />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  width: 100%;
  z-index: 1000;
`;

export default Header;
