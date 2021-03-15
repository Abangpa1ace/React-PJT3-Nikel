import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import LoginModal from './components/LoginModal';
import { loginModalOff } from '../../Store/Action/loginAction';
import { flexCenter } from '../../Styles/theme';

const Login = () => {
  const { modalOn } = useSelector(state => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = (modalOn ? 'hidden' : 'auto');
  }, [modalOn])

  const setModalOff = () => {
    dispatch(loginModalOff())
  }

  return (
    <LoginContainer modalOn={modalOn} >
      <LoginCloser onClick={setModalOff} />
      <LoginModal modalOn={modalOn} setModalOff={setModalOff} />
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
  ${flexCenter};
  display: ${({ modalOn }) => modalOn ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: ${({ theme }) => theme.z_Modal_under};
`;

const LoginCloser = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default Login
