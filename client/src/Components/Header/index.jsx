import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderUserMenu from './components/HeaderUserMenu';
import HeaderNavbar from './components/HeaderNavbar';
import Login from '../Login';
import SearchModal from './components/SearchModal';

const Header = () => {
  const [searchOn, setSearchOn] = useState(false);

  return (
    <HeaderWrapper>
      <Login />
      <HeaderUserMenu />
      <HeaderNavbar setSearchOn={setSearchOn} />
      {searchOn && <SearchModal searchOn={searchOn} setSearchOn={setSearchOn} />}
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  width: 100%;
  z-index: ${({ theme }) => theme.z_Navbar};
`;

export default Header;
