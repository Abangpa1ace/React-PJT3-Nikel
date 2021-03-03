import React from 'react'
import styled from 'styled-components';

const LoginAccessLinks = () => {
  return (
    <AccessLinks>
      <p>회원이 아니신가요?&nbsp;<a href="/register">회원가입</a></p>
      <a href="/order/not_user">비회원 주문 조회</a>
    </AccessLinks>
  )
}

const AccessLinks = styled.footer`
  margin: 40px auto;
  font-size: 12px;

  p {
    margin: 0 0 20px;
    color: ${({ theme }) => theme.gray2};
  }

  a {
    text-decoration: underline;
  }
`;

export default LoginAccessLinks
