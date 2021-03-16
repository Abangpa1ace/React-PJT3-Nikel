import React from 'react';
import styled from 'styled-components';
import { Input } from '../../../../Components/Common/StyledCommon';

const regexEmail = /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
const regexPwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/;
const regexNotNum = /[^0-9]/;

const FormInputWrapper = ({ registerValue, registerValid, setRegisterValue, setRegisterValid }) => {
  const { email, password, passwordAgain, fullName, phone } = registerValue;
  const { emailValid, passwordValid, passwordAgainValid, fullNameValid, phoneValid } = registerValid;

  const ValidationObject = {
    email: (value) => regexEmail.test(value),
    password: (value) => regexPwd.test(value),
    passwordAgain: (value) => password === value,
    fullName: (value) => !!value,
    phone: (value) => !regexNotNum.test(value),
  }

  const updateRegisterData = (event) => {
    const { name, value } = event.target;
    setRegisterValue({...registerValue, [name]: value });
    setRegisterValid({...registerValid, [name+'Valid']: ValidationObject[name](value) });
  }

  return (
    <Forminputwrapper>
        <Input type="email" placeholder="사용하실 ID를 입력해주세요 (수신 가능 E-mail)" 
          name="email" value={email} onChange={(e) => updateRegisterData(e)}
          margin="7px 0" 
          border={({ theme }) => emailValid ? theme.gray1 : theme.redError}
          borderActive={({ theme }) => !emailValid && theme.redError }
        />
        {!emailValid && 
        <p>
          {!email 
            ? '필수 입력 항목입니다.'
            : '이메일 형태로 입력해주세요. 해당 계정으로 주문내역이 발송됩니다.'
          }
        </p>}

        <Input type="password" placeholder="영문 대/소문+숫자+특수문자 8~16자리 (괄호(), <> 사용 불가)" 
          name="password" value={password} onChange={(e) => updateRegisterData(e)}
          margin="7px 0" 
          border={({ theme }) => passwordValid ? theme.gray1 : theme.redError}
          borderActive={({ theme }) => !passwordValid && theme.redError }
        />
        {!passwordValid && 
        <p>
          {!password 
            ? '필수 입력 항목입니다.'
            : '비밀번호 형식을 맞춰주세요. 영문 대/소문+숫자+특수문자 8~16자리'
          }
        </p>}

        <Input type="password" placeholder="패스워드를 다시 입력해주세요" 
          name="passwordAgain" value={passwordAgain} onChange={(e) => updateRegisterData(e)}
          margin="7px 0" 
          border={({ theme }) => passwordAgainValid ? theme.gray1 : theme.redError}
          borderActive={({ theme }) => !passwordAgainValid && theme.redError }
        />
        {!passwordAgainValid && 
        <p>
          {!passwordAgain
            ? '필수 입력 항목입니다.'
            : '비밀번호 입력값이 일치하지 않습니다.'
          }
        </p>}

        <Input type="text" placeholder="이름을 입력해 주세요" 
          name="fullName" value={fullName} onChange={(e) => updateRegisterData(e)}
          margin="7px 0" 
          border={({ theme }) => fullNameValid ? theme.gray1 : theme.redError}
          borderActive={({ theme }) => !fullNameValid && theme.redError }
        />
        {!fullNameValid && 
        <p>
          {!fullName && '필수 입력 항목입니다.'}
        </p>}

        <Input type="text" placeholder="휴대폰 번호 '-'표 없이 입력해 주세요" 
          name="phone" value={phone} onChange={(e) => updateRegisterData(e)}
          margin="7px 0" 
          border={({ theme }) => phoneValid ? theme.gray1 : theme.redError}
          borderActive={({ theme }) => !phoneValid && theme.redError }
        />
        {!phoneValid && 
        <p>
          {!phone
            ? '필수 입력 항목입니다.'
            : '숫자만 입력 가능합니다.'
          }
        </p>}
      </Forminputwrapper>
  )
}

const Forminputwrapper = styled.section`
  p {
    margin: 5px 0 10px;
    color: ${({ theme }) => theme.redError};
    font-size: 10px;
  }
`;

export default FormInputWrapper
