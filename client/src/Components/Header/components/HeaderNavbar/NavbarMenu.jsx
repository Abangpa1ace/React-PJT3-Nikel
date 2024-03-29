import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { flexCenter, flexAlign } from '../../../../Styles/theme';
import { NAV_CATEGORIES } from '../../HeaderData';

const NavMenu = ({ navFocus, setNavFocus, setFocusChange }) => {
  const EnterMenu = (id) => {
    setNavFocus(id);
    setFocusChange(true);
  }

  const OutMenu = () => {
    setFocusChange(false);
  }

  return (
    <Navmenu >
      {NAV_CATEGORIES.map(category => {
        const { id, title, link } = category;
        return (
          <Link to={link} 
            className={id === navFocus ? 'focus' : ''} 
            onMouseOver={() => EnterMenu(id)}
            onMouseOut={() => OutMenu()}
            >
            {title}
          </Link>
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
    z-index: ${({ theme }) => theme.z_Navbar};

    &.focus {
      border-bottom: 2px solid ${({ theme }) => theme.black};
    }
  }
`;

export default NavMenu;
