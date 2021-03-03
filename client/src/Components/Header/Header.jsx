import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderUserMenu from './components/HeaderUserMenu';
import HeaderNavbar from './components/HeaderNavbar'
import Login from './Login/Login';

const Header = () => {
  const [isLoginOn, setIsLoginOn] = useState(false);

  return (
    <HeaderWrapper>
      <Login isLoginOn={isLoginOn} setIsLoginOn={setIsLoginOn} />
      <HeaderUserMenu setIsLoginOn={setIsLoginOn} />
      <HeaderNavbar />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  width: 100%;
  z-index: 1000;
`;

export default Header;
