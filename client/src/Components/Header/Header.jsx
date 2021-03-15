import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderUserMenu from './components/HeaderUserMenu';
import HeaderNavbar from './components/HeaderNavbar'
import Login from '../Login/Login';
import SearchModal from './components/SearchModal/SearchModal';

const Header = () => {
  return (
    <HeaderWrapper>
      <Login />
      <HeaderUserMenu />
      <HeaderNavbar />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  width: 100%;
  z-index: ${({ theme }) => theme.z_Navbar};
`;

export default Header;
