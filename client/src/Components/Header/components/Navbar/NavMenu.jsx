import React from 'react';
import styled from 'styled-components';
import { Linker } from '../../../../Common/StyledCommon';
import { flexCenter, flexAlign } from '../../../../Styles/theme';
import { NAV_CATEGORIES } from '../../HeaderData';

const NavMenu = ({ navFocus, setNavFocus }) => {
  return (
    <Navmenu >
      {NAV_CATEGORIES.map(category => {
        const { id, title, link } = category;
        return (
          <Linker to={link} className={id === navFocus ? 'focus' : ''} onMouseEnter={() => setNavFocus(id)}>
            <li key={id}>{title}</li>
          </Linker>
        )
      })}
    </Navmenu>
  )
}

const Navmenu = styled.ul`
  ${flexCenter};
  height: 100%;

  a {
    ${flexAlign};
    height: 100%;

    &.focus {
      border-bottom: 2px solid ${({ theme }) => theme.black};
    }
    
    li {
      padding: 0 12px;
      font-weight: 500;
    }
  }
`;

export default NavMenu
