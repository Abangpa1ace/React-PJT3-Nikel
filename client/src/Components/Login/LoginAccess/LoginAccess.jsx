import React from 'react';
import LoginAccessForm from './LoginAccessForm';
import LoginAccessTitle from './LoginAccessTitle';
import LoginAccessSocial from './LoginAccessSocial';
import LoginAccessLinks from './LoginAccessLinks';

const LoginAccess = ({ setIsLoginOn, setLoginMode }) => {
  return (
    <>
      <LoginAccessTitle />
      <LoginAccessForm setIsLoginOn={setIsLoginOn} setLoginMode={setLoginMode} />
      <LoginAccessSocial />
      <LoginAccessLinks />
    </>
  )
}

export default LoginAccess
