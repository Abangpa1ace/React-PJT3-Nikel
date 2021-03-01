import React from 'react';
import styled from 'styled-components';
import { Linker } from '../../../../Common/StyledCommon';
import { flexAlign } from '../../../../Styles/theme';
import { BsSearch, BsHeart, BsBag } from 'react-icons/bs';

const NavTools = () => {
  return (
    <Navtools>
      <SearchBar key="search-bar">
        <input type="text" placeholder="검색" onClick={() => this.setState({ isSearchOn: true })} />
        <BsSearch />
      </SearchBar>
      <Linker to="/"><BsHeart /></Linker>
      <Linker to="/cart"><BsBag /></Linker>
    </Navtools>
  )
}

const Navtools = styled.div`
  ${flexAlign};
  justify-content: flex-end;
  width: 30%;

  & > * {
    margin: 0 10px;
  }

  svg {
    width: 24px;
    height: 24px;
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
