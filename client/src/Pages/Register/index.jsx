import React from 'react'
import styled from 'styled-components'
import RegisterAbove from './components/RegisterAbove';
import RegisterForm from './components/RegisterForm';

const Register = () => {
  return (
    <RegisterPage>
      <RegisterWrapper>
        <RegisterAbove />
        <RegisterDivider>
          <div className="divider-line" />
          <span>OR</span>
        </RegisterDivider>
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

const RegisterDivider = styled.div`
  position: relative;
  margin: 40px 0;
  
  .divider-line {
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.gray0C};
  }

  span {
    position: absolute;
    top: -7px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 20px;
    background: #ffffff;
    color: ${({ theme }) => theme.gray2};
    font-size: 14px;
  }
`;

export default Register;
