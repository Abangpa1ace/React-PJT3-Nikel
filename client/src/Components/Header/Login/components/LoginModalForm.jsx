import React from 'react'
import styled from 'styled-components';
import { Input, Button } from '../../../../Common/StyledCommon';
import { flexAlign, flexBetween } from '../../../../Styles/theme';

const LoginModalForm = () => {
  return (
    <ModalForm>
      <LoginAlerter>아이디 혹은 비밀번호가 잘못 입력되었습니다.</LoginAlerter>
      <Input type="email" placeholder="아이디" 
        name="email" /* value={email} onChange={(e) => updateRegisterData(e)} */
        margin="7px 0" 
        // border={({ theme }) => emailValid ? theme.gray1 : theme.redError}
        // borderActive={({ theme }) => !emailValid && theme.redError }
      />
      <LoginAlerter>필수 입력 항목입니다.</LoginAlerter>
      <Input type="password" placeholder="비밀번호" 
        name="password" /* value={email} onChange={(e) => updateRegisterData(e)} */
        margin="7px 0" 
        // border={({ theme }) => emailValid ? theme.gray1 : theme.redError}
        // borderActive={({ theme }) => !emailValid && theme.redError }
      />
      <LoginAlerter>필수 입력 항목입니다.</LoginAlerter>
      <LoginTools>
        <CheckCon>
          <input type="checkbox" name="saveLoginInfo" />
          <p>로그인 유지하기</p>
        </CheckCon>
        <p>아이디/비밀번호 찾기</p>
      </LoginTools>
      <Button type="submit"
        width="100%"
        height="45px"
        background="#000000"
        color="#ffffff"
        fontSize="16px"
        radius="3px"
      >로그인</Button>
    </ModalForm>
  )
}

const ModalForm = styled.form`
`;

const LoginAlerter = styled.p`
  margin: 3px 0 10px;
  color: ${({ theme }) => theme.redError};
  text-align: left;
  font-size: 10px;
`;

const LoginTools = styled.div`
  ${flexBetween};
  margin: 20px 0;
  
  p { 
    color: ${({ theme }) => theme.gray2};
    font-size: 12px;
  };
`;

const CheckCon = styled.div`
  ${flexAlign};
  margin: 5px 0 10px;

  input {
    width: 16px;
    height: 16px;
    margin: 0 7px 0 0;
  }

`;


export default LoginModalForm
