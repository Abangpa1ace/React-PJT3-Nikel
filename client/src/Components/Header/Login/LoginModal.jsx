import React from 'react'
import styled from 'styled-components';
import LoginModalForm from './components/LoginModalForm';
import LoginModalTitle from './components/LoginModalTitle';

const LoginModal = ({ isLoginOn, setIsLoginOn }) => {
  return (
    <LoginModalBox className={isLoginOn ? 'active' : ''} >
      <button className="exit-login-btn" onClick={() => setIsLoginOn(false)}>X</button>
      <LoginModalTitle />
      <LoginModalForm />
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
  z-index: 2000;

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
