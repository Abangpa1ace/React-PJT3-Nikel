import React from 'react';
import styled from 'styled-components';
import FooterLinks from './components/FooterLinks';
import FooterRights from './components/FooterRights';
import FooterInfo from './components/FooterInfo';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks />
      <FooterRights />
      <FooterInfo />
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  background: ${({ theme }) => theme.footerBlack};
  z-index: ${({ theme }) => theme.z_Navbar};

  & > section {
    margin: 0 auto;
  }
`;

export default Footer
