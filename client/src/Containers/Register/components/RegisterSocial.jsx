import React from 'react';
import styled from 'styled-components';
import SocialButton from '../../../Common/SocialButton/SocialButton';

const RegisterSocial = () => {
  return (
    <Registersocial>
      <SocialButton 
        link="/" 
        background={({ theme }) => theme.colorKakao}>
        카카오 계정으로 신규 가입
      </SocialButton>
      <SocialButton 
        link="/" 
        color="#FFFFFF"
        background={({ theme }) => theme.colorFacebook}>
        페이스북 계정으로 신규 가입
      </SocialButton>
    </Registersocial>
  )
}

const Registersocial = styled.div`
`;

export default RegisterSocial
