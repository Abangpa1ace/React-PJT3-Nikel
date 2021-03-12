import React, { useState } from 'react'
import styled, {keyframes} from 'styled-components';
import { Link } from 'react-router-dom';
import NavLogo from '../Navbar/NavLogo';
import { BsSearch } from 'react-icons/bs';
import { FiDelete } from 'react-icons/fi';
import { Button } from '../../../../Common/StyledCommon';
import { flexAlign, flexBetween } from '../../../../Styles/theme';

const SearchHeader = ({ setSearchOn }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Searchheader>
      <NavLogo />
      <SearchBar>
        <input type="text" placeholder="검색" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
        <Button 
          width="40px"
          height="40px"
          backgroundHov={({ theme }) => theme.gray1}
          radius="20px"
          ><Link to="/list"><BsSearch /></Link></Button>
        <Button 
          width="40px"
          height="40px"
          backgroundHov={({ theme }) => theme.gray1}
          radius="20px"
          onClick={() => setSearchValue('')}><FiDelete visible={searchValue} /></Button>
      </SearchBar>
      <ButtonWrapper>
        <Button
          width="35px"
          height="35px"
          background={({ theme }) => theme.gray0}
          backgroundHov={({ theme }) => theme.gray1}
          fontSize="20px"
          radius="50%"
          onClick={() => setSearchOn(false)}
        >X</Button>
      </ButtonWrapper>
    </Searchheader>
  )
}

const Searchheader = styled.header`
  ${flexBetween};
  width: 100%;
  height: 60px;
  padding: 0 48px;
  z-index: ${({ theme }) => theme.z_Modal};
`;

const setElongation = keyframes`
  0% {
    width: 200px;
  }
  100% {
    width: 640px;
  }
`;

const SearchBar = styled.div`
  ${flexAlign};
  position: relative;
  height: 40px;
  background: ${({ theme }) => theme.gray0};
  border-radius: 20px;
  overflow: hidden;
  animation: ${setElongation} .3s ease forwards;

  button {
    position: absolute;
    top: 0;

    &:first-child {
      left: 0;
    }

    &:last-child {
      right: 0;
    }
  }

  input {
    width: 100%;
    padding: 10px 50px;
    font-size: initial;

    &:hover {
      background: ${({ theme }) => theme.gray1};
    }
  }
`;

const ButtonWrapper = styled.div`
  ${flexAlign};
  justify-content: flex-end;
  width: 30%;
`;

export default SearchHeader
