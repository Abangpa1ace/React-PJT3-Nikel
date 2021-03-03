import React from 'react'
import SocialButton from '../../../../Common/SocialButton/SocialButton';

const LoginAccessSocial = () => {
  return (
    <>
      <SocialButton 
        link="/" 
        background={({ theme }) => theme.colorKakao}>
        카카오 계정 로그인
      </SocialButton>
      <SocialButton 
        link="/" 
        color="#FFFFFF"
        background={({ theme }) => theme.colorFacebook}>
        페이스북 계정 로그인
      </SocialButton>
    </>
  )
}

export default LoginAccessSocial
