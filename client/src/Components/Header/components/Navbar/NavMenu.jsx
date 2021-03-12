import React from 'react';
import styled from 'styled-components';
import { Linker } from '../../../../Common/StyledCommon';
import { flexCenter, flexAlign } from '../../../../Styles/theme';
import { NAV_CATEGORIES } from '../../HeaderData';

const NavMenu = ({ navFocus, setNavFocus, setFocusChange }) => {
  const EnterMenu = (id) => {
    setNavFocus(id);
    setFocusChange(true);
  }

  const OutMenu = () => {
    setNavFocus(0);
    setFocusChange(false);
  }

  return (
    <Navmenu >
      {NAV_CATEGORIES.map(category => {
        const { id, title, link } = category;
        return (
          <Linker to={link} 
            className={id === navFocus ? 'focus' : ''} 
            onMouseOver={() => EnterMenu(id)}
            onMouseOut={() => OutMenu()}
            >
            {title}
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
    padding: 0 12px;
    font-weight: 500;
    z-index: 1000;

    &.focus {
      border-bottom: 2px solid ${({ theme }) => theme.black};
    }
  }
`;

export default NavMenu;
