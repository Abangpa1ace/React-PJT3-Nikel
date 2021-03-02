import React from 'react'
import styled from 'styled-components'

const RegisterTitle = () => {
  return (
    <Registertitle>
      <h2>나이키 멤버 가입</h2>
      <p>멤버가 되어 나이키가 제공하는 <br /> 최고의 제품과 혜택을 만나보세요.</p>
    </Registertitle>
  )
}

const Registertitle = styled.div`
  text-align: center;
  margin: 0 0 30px;
  
  h2 {
    padding: 0 0 15px;
    font-weight: normal;
  }
  p {
    color: ${({ theme }) => theme.gray2};
    font-size: 14px;
    line-height: 1.5;
  }
`;

export default RegisterTitle
