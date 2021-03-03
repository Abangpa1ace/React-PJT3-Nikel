import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderUserMenu from './components/HeaderUserMenu';
import HeaderNavbar from './components/HeaderNavbar'
import Login from './Login/Login';
import SearchModal from './components/SearchModal/SearchModal';

const Header = () => {
  const [isLoginOn, setIsLoginOn] = useState(false);
  const [searchOn, setSearchOn] = useState(false);

  return (
    <HeaderWrapper>
      <Login isLoginOn={isLoginOn} setIsLoginOn={setIsLoginOn} />
      <HeaderUserMenu setIsLoginOn={setIsLoginOn} />
      <HeaderNavbar setSearchOn={setSearchOn} />
      {searchOn && <SearchModal searchOn={searchOn} setSearchOn={setSearchOn} />}
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  width: 100%;
  z-index: 1000;
`;

export default Header;
