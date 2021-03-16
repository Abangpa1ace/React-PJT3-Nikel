import React from 'react'
import styled from 'styled-components'

const InfoContainer = ({ children }) => {
  return (
    <BoxWrapper>
      {children}
    </BoxWrapper>
  )
}

const BoxWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.gray0C};
`;

export default InfoContainer
