import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../Common/StyledCommon';

const RegisterSocial = () => {
  return (
    <>
      <Link to="/">
        <Button
          width="100%"
          height="40px"
          background={({ theme }) => theme.colorKakao}
          fontSize="16px"
          radius="5px"
          margin="0 0 10px"
        >카카오 계정으로 신규 가입</Button>
      </Link>
      <Link to="/">
        <Button
          width="100%"
          height="40px"
          background={({ theme }) => theme.colorFacebook}
          fontSize="16px"
          radius="5px"
          color="#FFFFFF"
        >페이스북 계정으로 신규 가입</Button>
      </Link>
    </>
  )
}

export default RegisterSocial
