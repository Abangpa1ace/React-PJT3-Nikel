import React, { useState } from 'react'
import styled from 'styled-components';
import LoginAccess from './LoginAccess/LoginAccess';
import LoginFind from './LoginFind/LoginFind';


const LoginModal = ({ isLoginOn, setIsLoginOn }) => {
  const [loginMode, setLoginMode] = useState('access');
  return (
    <LoginModalBox className={isLoginOn ? 'active' : ''} >
      <button className="exit-login-btn" onClick={() => setIsLoginOn(false)}>X</button>
      {loginMode === 'access' 
        ? <LoginAccess setIsLoginOn={setIsLoginOn} setLoginMode={setLoginMode} /> 
        : <LoginFind setLoginMode={setLoginMode} />}
    </LoginModalBox>
  )
}

const LoginModalBox = styled.div`
  position: relative;
  width: 480px;
  padding: 20px;
  background: #ffffff;
  text-align: center;
  border-radius: 5px;
  opacity: 0;
  transform: translateY(-20%);
  transition: all .5s ease;
  z-index: ${({ theme }) => theme.z_Modal};

  &.active {
    opacity: 1;
    transform: translateY(0);
  }

  .exit-login-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 20px;
  }
`;

export default LoginModal
