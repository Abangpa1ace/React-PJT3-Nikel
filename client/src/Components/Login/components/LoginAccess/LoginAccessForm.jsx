import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { loginRequest } from '../../../../Store/Action/loginAction'
import { Input, Button } from '../../../Common/StyledCommon';
import { flexAlign, flexBetween } from '../../../../Styles/theme';

const LoginAccessForm = ({ setLoginMode }) => {
  const loginState = useSelector(state => state.login);
  const dispatch = useDispatch();

  const [loginValue, setLoginValue] = useState({
    email: '',
    password: '',
  })

  const [loginValueExist, setLoginValueExist] = useState({
    isTracing: false,
    emailExist: true,
    passwordExist: true,
  })

  const { email, password } = loginValue;
  const { emailExist, passwordExist, isTracing } = loginValueExist;

  const [isRemeberEmail, setIsRemeberEmail] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['rememberEmail']);

  useEffect(() => {
    if (cookies.rememberEmail !== undefined) {
      setLoginValue({ ...loginValue, email: cookies.rememberEmail });
      setIsRemeberEmail(true);
    }
  }, [cookies.rememberEmail, loginValue]);

  const updateLoginValue = (event) => {
    const { name, value } = event.target;
    setLoginValue({ ...loginValue, [name]: value });
    if (isTracing) {
      setLoginValueExist({...loginValueExist, [name+'Exist']: !!value});
    }
  }

  const updateRememberEmail = (event) => {
    const { checked } = event.target
    setIsRemeberEmail(checked);
    checked ? setCookie('rememberEmail', email, { maxAge: 2000 }) : removeCookie('rememberEmail');
  }

  const submitLogin = async (event) => {
    event.preventDefault();
    setLoginValueExist({
      isTracing: true,
      emailExist: !!email,
      passwordExist: !!password,
    })
    if (!emailExist || !passwordExist) {
      return;
    }
    else {
      dispatch(loginRequest(loginValue));
    }
  }

  return (
    <AccessForm onSubmit={(e) => submitLogin(e)}>
      {(isTracing && !loginState.success) && <LoginAlerter>아이디 혹은 비밀번호가 잘못 입력되었습니다.</LoginAlerter>}
      <Input type="email" placeholder="아이디" 
        name="email" value={email} onChange={(e) => updateLoginValue(e)}
        margin="7px 0" 
        border={({ theme }) => emailExist ? theme.gray1 : theme.redError}
        borderActive={({ theme }) => !emailExist && theme.redError }
      />
      {!emailExist && <LoginAlerter>필수 입력 항목입니다.</LoginAlerter>}
      <Input type="password" placeholder="비밀번호" 
        name="password" value={password} onChange={(e) => updateLoginValue(e)}
        margin="7px 0" 
        border={({ theme }) => passwordExist ? theme.gray1 : theme.redError}
        borderActive={({ theme }) => !passwordExist && theme.redError }
      />
      {!passwordExist && <LoginAlerter>필수 입력 항목입니다.</LoginAlerter>}
      <LoginTools>
        <CheckCon>
          <input type="checkbox" name="rememberLogin" 
            checked={isRemeberEmail} onChange={updateRememberEmail} />
          <p>로그인 유지하기</p>
        </CheckCon>
        <p onClick={() => setLoginMode('find')}>아이디/비밀번호 찾기</p>
      </LoginTools>
      <Button type="submit"
        width="100%"
        height="45px"
        background="#000000"
        margin="0 0 10px"
        color="#ffffff"
        fontSize="16px"
        radius="3px"
      >로그인</Button>
    </AccessForm>
  )
}

const AccessForm = styled.form`
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
    cursor: pointer;
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


export default LoginAccessForm
