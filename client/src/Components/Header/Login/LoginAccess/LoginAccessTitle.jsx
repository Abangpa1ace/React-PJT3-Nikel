import React from 'react';
import styled from 'styled-components';

const LoginAccessTitle = () => {
  return (
    <AccessTitle>
      <img src="./Images/logo-nike.png" alt="logo-nike" />
      <h2>나이켈 로그인</h2>
    </AccessTitle>
  )
}

const AccessTitle = styled.header`
  margin: 40px auto;

  img {
    width: 60px;
    transform: scaleX(-1);
    &:hover {
      opacity: 0.5;
    }
  }
  h2 {
    margin: 30px 0 0;
    font-weight: 500;
  }
`;

export default LoginAccessTitle
