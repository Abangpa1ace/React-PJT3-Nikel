import React from 'react'
import styled from 'styled-components'
import RegisterTitle from './components/RegisterTitle'
import RegisterSocial from './components/RegisterSocial'
import RegisterDivider from './components/RegisterDivider'
import RegisterForm from './components/RegisterForm';

const Register = () => {
  return (
    <RegisterPage>
      <RegisterWrapper>
        <RegisterTitle />
        <RegisterSocial />
        <RegisterDivider />
        <RegisterForm />
      </RegisterWrapper>
    </RegisterPage>
  )
}

const RegisterPage = styled.div`
  margin: 80px 0 40px;
  padding: 40px;
`;

const RegisterWrapper = styled.main`
  width: 420px;
  padding: 20px;
  margin: 0 auto;
`;

export default Register
