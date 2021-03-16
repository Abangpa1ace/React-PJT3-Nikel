import React from 'react'
import styled, { css, keyframes } from 'styled-components';
import SearchInput from './SearchInput';
import SearchRecommend from './SearchRecommend';

const SearchModal = ({ searchOn, setSearchOn }) => {
  return (
    <Searchmodal>
      <SearchBlur searchOn={searchOn} onClick={() => setSearchOn(false)} />
      <SearchInput setSearchOn={setSearchOn} />
      <SearchRecommend />
    </Searchmodal>
  )
}

const Searchmodal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  z-index: ${({ theme }) => theme.z_Modal};
`;

const setBlur = keyframes`
  0% {
    opacity: 0;
    background: rgba(255, 255, 255, 0);
    backdrop-filter: blur(0px);
  }
  100% {
    opacity: 1;
    background: rgba(18, 18, 18, 0.15);
    backdrop-filter: blur(10px);
  }
`;

const SearchBlur = styled.div`
  position: absolute;
  top: 300px;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: ${({ theme }) => theme.z_Modal};
  animation: ${({ searchOn }) => searchOn && css`${setBlur} .5s ease forwards;`};
`;

export default SearchModal

