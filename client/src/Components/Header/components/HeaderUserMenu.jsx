import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { Linker } from '../../../Common/StyledCommon';
import { flexAlign, flexBetween, flexCenter } from '../../../Styles/theme';
import { setAuthorized, unsetAuthorized } from '../../../Store/Action/authorAction';
import { loginModalOn, loginModalOff } from '../../../Store/Action/loginAction';

const HeaderUserMenu = () => {
  const { isAuthorized } = useSelector(state => state.author);
  const dispatch = useDispatch();

  const updateAuthorized = useCallback(() => {
    dispatch(localStorage.getItem("token") ? setAuthorized() : unsetAuthorized())
  }, [dispatch])

  useEffect(() => {
    updateAuthorized()
  }, [updateAuthorized])

  const clickLoginMenu = () => {
    if (!isAuthorized) {
      dispatch(loginModalOn())
    }
    else {
      alert('로그아웃합니다. 감사합니다.');
      localStorage.clear();
      window.location.reload();
    }
  }

  return (
    <Headerusermenu>
      <Linker to="/">
        <img src="/Images/logo-jumpman.png" alt="logo-jumpman" />
      </Linker>
      <ul className="client-menu">
        <li><Linker to="/client">고객센터</Linker></li>
        {!isAuthorized && <li><Linker to="/register">멤버가입</Linker></li>}
        <li onClick={clickLoginMenu}>
          {isAuthorized ? '로그아웃' : '로그인'}
        </li>
      </ul>
    </Headerusermenu>
  )
}

const Headerusermenu = styled.div`
  ${flexBetween};
  height: 36px;
  background: ${({ theme }) => theme.gray0};
  padding: 0 48px;

  img {
    width: 20px;
    transform: rotate(-90deg);
    &:hover {
      opacity: 0.5;
    }
  }

  .client-menu {
    ${flexCenter};
    height: 100%;

    li {
      ${flexAlign};
      position: relative;
      padding: 0 12px;
      height: 100%;
      font-size: 12px;
      cursor: pointer;

      &:hover a {
        opacity: 0.5;
      }

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 1px;
        height: 12px;
        background: ${({ theme }) => theme.black};
      }

      &:last-child {
        padding-right: 0;
        &::after { display: none };
      }
    }
  }
`;

export default HeaderUserMenu;
