import React from 'react';
import styled from 'styled-components';
import { Linker } from '../../../../Common/StyledCommon';
import { flexAlign } from '../../../../Styles/theme';

const NavLogo = () => {
  return (
    <Navlogo to="/">
      <img src="/Images/logo-nike.png" alt="logo-nike" />
    </Navlogo>
  )
}

const Navlogo = styled(Linker)`
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

export default NavLogo
