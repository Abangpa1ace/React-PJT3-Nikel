import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FOOTER_LINK_ROUTES, FOOTER_LINK_SOCIAL, FOOTER_LINK_CLIENT } from '../FooterData';
import { flexAlign, flexBetweenStart } from '../../../Styles/theme';

const FooterLinks = () => {
  return (
    <Footerlinks>
      <FooterLinkList>
        {FOOTER_LINK_ROUTES.map(route => {
          const { id, title, link } = route;
          return (
            <li key={id}><Link to={link}><p>{title}</p></Link></li>
          )
        })}
      </FooterLinkList>
      <FooterLinkList>
        <p>고객센터</p>
          {FOOTER_LINK_CLIENT.map(client => {
            const { id, title, link } = client;
            return (
              <li key={id}><Link to={link}><span>{title}</span></Link></li>
            )
          })}
      </FooterLinkList>
      <FooterLinkList>
        <p>ABOUT NIKE</p>
        <span>나이키에 대하여</span>
      </FooterLinkList>
      <FooterLinkList>
        <p>SOCIAL</p>
        <LinksSocial>
          {FOOTER_LINK_SOCIAL.map(socials => {
            const { id, link, svg } = socials;
            return (
              <li key={id}><div><Link to={link}>{svg}</Link></div></li>
            )
          })}
        </LinksSocial>
      </FooterLinkList>
    </Footerlinks>
  )
}

const Footerlinks = styled.section`
  ${flexBetweenStart};
  width: ${({ theme }) => theme.footerWidth};
  padding: 60px 0 30px;
`;

const FooterLinkList = styled.ul`
  p {
    margin: 0 0 15px;
    font-size: 14px;
    color: ${({ theme }) => theme.gray0};
    text-transform: uppercase;
  }
  span {
    display: inline-block;
    margin: 0 0 10px;
    font-size: 12px;
    color: ${({ theme }) => theme.gray3};
    &:hover {
      color: ${({ theme }) => theme.gray0};
    }
  }
`;

const LinksSocial = styled.div`
  ${flexAlign};

  div {
    width: 20px;
    height: 20px;
    margin: 0 10px 0 0;
    padding: 3px;
    background: ${({ theme }) => theme.gray3};
    border-radius: 50%;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export default FooterLinks;
