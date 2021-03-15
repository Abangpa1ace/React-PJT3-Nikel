import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { flexAlign } from '../../../../Styles/theme';
import { BsSearch, BsHeart, BsBag } from 'react-icons/bs';

const NavTools = ({ setSearchOn, exitCategories }) => {
  const cartState = useSelector(state => state.cart);
  const cartListLen = cartState.list.length;

  return (
    <Navtools>
      <SearchBar onMouseEnter={exitCategories} onClick={() => setSearchOn(true)}>
        <input type="text" placeholder="검색" />
        <BsSearch />
      </SearchBar>
      <Link to="/" onMouseEnter={exitCategories} ><BsHeart /></Link>
      <Link to="/cart" onMouseEnter={exitCategories} >
        <BsBag />
        {cartListLen !== 0 && <span>{cartListLen}</span>}
      </Link>
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
    position: relative;
    padding: 10px;
    border-radius: 50%;
    
    &:hover {
      background: ${({ theme }) => theme.gray1};
    }

    span {
      position: absolute;
      font-size: 12px;
      right: 50%;
      transform: translate(50%, 20%);
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

export default withRouter(NavTools);
