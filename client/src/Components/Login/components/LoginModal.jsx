import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components';
import LoginAccess from './LoginAccess';
import LoginFind from './LoginFind';


const LoginModal = ({ modalOn, setModalOff }) => {
  const [loginMode, setLoginMode] = useState('access');
  return (
    <LoginModalBox modalOn={modalOn} >
      <button className="exit-login-btn" onClick={setModalOff}>X</button>
      {loginMode === 'access' 
        ? <LoginAccess setLoginMode={setLoginMode} /> 
        : <LoginFind setLoginMode={setLoginMode} />}
    </LoginModalBox>
  )
}

const modalDown = keyframes`
  from { transform: translateY(-30%); }
  to { transform: translateY(0%); }
`;


const LoginModalBox = styled.div`
  position: relative;
  width: 480px;
  padding: 20px;
  background: #ffffff;
  text-align: center;
  border-radius: 5px;
  transition: all .5s ease;
  z-index: ${({ theme }) => theme.z_Modal};

  ${({ modalOn }) => modalOn &&
    css`animation: ${modalDown} .3s ease forwards;`
  }

  .exit-login-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 20px;
  }
`;

export default LoginModal
