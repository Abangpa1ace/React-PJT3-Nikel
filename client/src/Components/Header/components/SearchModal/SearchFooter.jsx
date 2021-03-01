import React from 'react'
import styled, { keyframes } from 'styled-components';
import { Linker } from '../../../../Common/StyledCommon';
import { SEARCH_KEYWORD } from '../../HeaderData';

const SearchFooter = () => {
  return (
    <Searchfooter>
      <SearchRecommend>
        <h4>추천 검색어</h4>
        <ul>
          {SEARCH_KEYWORD.map(keyword => 
            <li key={keyword.id} delay={keyword.id}><Linker to={keyword.link}>{keyword.keyword}</Linker></li>
          )}
        </ul>
      </SearchRecommend>
    </Searchfooter>
  )
}

const Searchfooter = styled.footer`
  width: 100%;
  background: #ffffff;
  z-index: 1500;
`;

const setDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50%);
  }
  to {
    visibility: visible;
    opacity: 1;
    transform: translateY(0%);
  }
`;

const SearchRecommend = styled.section`
  width: 640px;
  padding: 30px 0; 
  margin: 0 auto;

  h4 {
    color: ${({ theme }) => theme.gray2};
    font-weight: normal;
    margin: 0 0 20px;
  }
  ul {
    li {
      margin: 15px 0;
      visibility: hidden;
      animation: ${setDown} .7s ease forwards;

      &:nth-child(1) { animation-delay: .1s; }

      &:nth-child(2) { animation-delay: .3s; }

      &:nth-child(3) { animation-delay: .5s; }

      &:nth-child(4) { animation-delay: .7s; }


      a {
        font-size: 20px;
        &:hover { color: ${({ theme }) => theme.gray2}};
      }
    }
  }

`;

export default SearchFooter
