import React from 'react';
import LoginAccessForm from './LoginAccessForm';
import LoginAccessTitle from './LoginAccessTitle';
import LoginAccessSocial from './LoginAccessSocial';
import LoginAccessLinks from './LoginAccessLinks';

const LoginAccess = ({ setLoginMode }) => {
  return (
    <>
      <LoginAccessTitle />
      <LoginAccessForm setLoginMode={setLoginMode} />
      <LoginAccessSocial />
      <LoginAccessLinks />
    </>
  )
}

export default LoginAccess
