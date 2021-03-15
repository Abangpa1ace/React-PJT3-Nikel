import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { FaMapMarker } from 'react-icons/fa';
import { FOOTER_LINK_CLIENT } from '../FooterData';
import { flexAlign, flexBetween } from '../../../Styles/theme';

const FooterRights = () => {
  return (
    <Footerrights>
      <div className="left">
        <FaMapMarker />
        <span>대한민국</span>
        <span>2021 Nike. Inc. All Rights Reserved</span>
      </div>
      <div className="right">
        {FOOTER_LINK_CLIENT.slice(8,10).map(client => {
            const { id, title, link } = client;
            return (
              <li key={id}><Link to={link}><span>{title}</span></Link></li>
            )
          })}
      </div>
    </Footerrights>
  )
}

const Footerrights = styled.section`
  ${flexBetween};
  padding: 20px;
  border-top: 1px solid ${({ theme }) => theme.gray3};
  border-bottom: 1px solid ${({ theme }) => theme.gray3}; 

  div {
    ${flexAlign};

    span {
      color: ${({ theme }) => theme.gray3};
      font-size: 10px;
    };

    &.left {
      svg { 
        width: 12px;
        height: 12px;
        fill: #ffffff;
      };

      span:nth-child(2) {
        margin: 0 15px 0 10px;
        color: ${({ theme }) => theme.gray0};
      }
    }

    &.right {
      span {
        margin: 0 0 0 15px;
      }
    }
  }
`;

export default FooterRights
