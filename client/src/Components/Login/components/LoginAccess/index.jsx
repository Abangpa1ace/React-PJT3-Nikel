import React from 'react';
import AccessForm from './AccessForm';
import AccessTitle from './AccessTitle';
import AccessSocial from './AccessSocial';
import AccessLinks from './AccessLinks';

const LoginAccess = ({ setLoginMode }) => {
  return (
    <>
      <AccessTitle />
      <AccessForm setLoginMode={setLoginMode} />
      <AccessSocial />
      <AccessLinks />
    </>
  )
}

export default LoginAccess
