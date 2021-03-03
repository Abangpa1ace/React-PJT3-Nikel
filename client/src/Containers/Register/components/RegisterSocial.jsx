import React from 'react';
import SocialButton from '../../../Common/SocialButton/SocialButton';

const RegisterSocial = () => {
  return (
    <>
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
    </>
  )
}

export default RegisterSocial
