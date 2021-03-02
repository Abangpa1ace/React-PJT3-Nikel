import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Linker } from '../../../../Common/StyledCommon';
import { flexAlign } from '../../../../Styles/theme';
import { BsSearch, BsHeart, BsBag } from 'react-icons/bs';

const NavTools = ({ setSearchOn, exitCategories }) => {
  return (
    <Navtools>
      <SearchBar onMouseEnter={exitCategories} onClick={() => setSearchOn(true)}>
        <input type="text" placeholder="검색" />
        <BsSearch />
      </SearchBar>
      <Linker to="/" onMouseEnter={exitCategories} ><BsHeart /></Linker>
      <Linker to="/cart" onMouseEnter={exitCategories} ><BsBag /></Linker>
    </Navtools>
  )
}

const Navtools = styled.div`
  ${flexAlign};
  justify-content: flex-end;
  width: 30%;

  & > * {
    margin: 0 3px;
  }

  a {
    ${flexAlign};
    padding: 10px;
    border-radius: 50%;
    &:hover {
      background: ${({ theme }) => theme.gray1};
    }
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const SearchBar = styled.div`
  position: relative;
  width: 200px;

  input {
    position: relative;
    width: 100%;
    padding: 10px 25px 10px 50px;
    background: ${({ theme }) => theme.gray0};
    border-radius: 50px;

    &:hover {
      background: ${({ theme }) => theme.gray1};
    }
  }

  svg {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
  }

`;

export default NavTools
