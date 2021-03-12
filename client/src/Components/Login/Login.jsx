import React, { useEffect } from 'react'
import styled from 'styled-components'
import LoginModal from './LoginModal';
import { flexCenter } from '../../Styles/theme';

const Login = ({ isLoginOn, setIsLoginOn }) => {

  useEffect(() => {
    document.body.style.overflow = (isLoginOn ? 'hidden' : 'auto');
  }, [isLoginOn])

  return (
    <LoginContainer isLoginOn={isLoginOn} >
      <LoginModal isLoginOn={isLoginOn} setIsLoginOn={setIsLoginOn} />
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
  visibility: ${({ isLoginOn }) => isLoginOn ? 'visible' : 'hidden'};
  ${flexCenter};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: ${({ theme }) => theme.z_Modal_under};
`;

export default Login
