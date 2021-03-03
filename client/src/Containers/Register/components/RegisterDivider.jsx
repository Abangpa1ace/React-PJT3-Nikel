import React from 'react'
import styled from 'styled-components'

const RegisterDivider = () => {
  return (
    <Registerdivider>
      <div className="divider-line" />
      <span>OR</span>
    </Registerdivider>
  )
}

const Registerdivider = styled.div`
  position: relative;
  margin: 40px 0;
  z-index: 1;
  
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
    z-index: 1;
  }
`;

export default RegisterDivider
