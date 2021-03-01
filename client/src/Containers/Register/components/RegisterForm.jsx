import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Input } from '../../../Common/StyledCommon';
import { CLAUSE } from '../../../Data/config';
import { flexAlign } from '../../../Styles/theme';

const regexEmail = /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
const regexPwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/;
const regexNotNum = /[^0-9]/;

const RegisterForm = () => {
  const [registerValue, setRegisterValue] = useState({
    email: '',
    password: '',
    passwordAgain: '',
    fullName: '',
    phone: '',
  })

  const [isChecked, setIsChecked] = useState({
    clause: false,
    info: false,
    infoPromote: false,
    sendEmail: false,
    sendMessage: false,
  })

  const [registerValid, setRegisterValid] = useState({
    emailValid: true,
    passwordValid: true,
    passwordAgainValid: true,
    fullNameValid: true,
    phoneValid: true,
  })

  const ValidationObject = {
    email: (value) => regexEmail.test(value),
    password: (value) => regexPwd.test(value),
    passwordAgain: (value) => password === value,
    fullName: (value) => !!value,
    phone: (value) => !regexNotNum.test(value),
  }

  const updateRegisterValue = (event) => {
    const { name, value } = event.target;
    setRegisterValue({...registerValue, [name]: value });
    setRegisterValid({...registerValid, [name+'Valid']: ValidationObject[name](value) });
  }

  const updateCheck = (event) => {
    const { name, checked } = event.target;
    setIsChecked({...isChecked, [name]: checked})
  }

  const submitRegister = (event) => {
    event.preventDefault();
    if (inspectRequest()) {
      console.log({...registerValue, ...isChecked})
    }
  }

  const inspectRequest = () => {
    if (Object.values(registerValid).includes(false)) {
      window.scrollTo(0,0);
      return;
    }
    if (!isChecked.clause) {
      alert('이용약관에 동의해야 합니다.')
      return;
    }
    if (!isChecked.info) {
      alert('정보수집, 이용에 동의해야 합니다.')
      return;
    }
    return true;
  }

  const { email, password, passwordAgain, fullName, phone } = registerValue;
  const { emailValid, passwordValid, passwordAgainValid, fullNameValid, phoneValid } = registerValid;

  return (
    <Registerform onSubmit={(e) => submitRegister(e)}>
      <FormInputCon>
        <Input type="email" placeholder="사용하실 ID를 입력해주세요 (수신 가능 E-mail)" 
          name="email" value={email} onChange={(e) => updateRegisterValue(e)}
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
          name="password" value={password} onChange={(e) => updateRegisterValue(e)}
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
          name="passwordAgain" value={passwordAgain} onChange={(e) => updateRegisterValue(e)}
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
          name="fullName" value={fullName} onChange={(e) => updateRegisterValue(e)}
          margin="7px 0" 
          border={({ theme }) => fullNameValid ? theme.gray1 : theme.redError}
          borderActive={({ theme }) => !fullNameValid && theme.redError }
        />
        {!fullNameValid && 
        <p>
          {!fullName && '필수 입력 항목입니다.'}
        </p>}

        <Input type="text" placeholder="휴대폰 번호 '-'표 없이 입력해 주세요" 
          name="phone" value={phone} onChange={(e) => updateRegisterValue(e)}
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
      </FormInputCon>
      <FormCheckClause>
        <h6>이용약관</h6>
        <a href="/" target="_blank">전문보기</a>
        <div className="clause-scroll-box">
          {CLAUSE}
        </div>
        <CheckCon>
          <input type="checkbox" name="clause" onClick={(e) => updateCheck(e)} />
          <p>[필수] 약관에 동의 합니다.</p>
        </CheckCon>
      </FormCheckClause>
      <FormCheckInfo>
        <h6>개인정보 수집, 이용 동의</h6>
        <img src="./Images/info1.png" alt="check-info-alternative-img" />
        <CheckCon>
          <input type="checkbox" name="info" onClick={(e) => updateCheck(e)} />
          <p>[필수] 개인정보 수집, 이용에 동의 합니다.</p>
        </CheckCon>
        <span>※ 약관 및 개인정보 처리방침은 홈페이지 하단에 전문이 게제되어 있습니다.</span>
        <span>※ 이용약관 및 개인정보 수집, 이용 내용에 대해 동의/거부가 가능하며, <br />이 경우 회원가입 및 관련 서비스는 이용이 불가합니다.</span>
      </FormCheckInfo>
      <FormCheckPromote>
        <h6>선택적 개인정보 수집, 이용 동의</h6>
        <img src="./Images/info2.png" alt="check-info-alternative-img2" />
        <CheckCon>
          <input type="checkbox" name="infoPromote" onClick={(e) => updateCheck(e)} />
          <p>[선택] 개인정보 수집, 이용에 동의 합니다.</p>
        </CheckCon>
        <div className="check-sending">
          <CheckCon>
            <input type="checkbox" name="sendEmail" onClick={(e) => updateCheck(e)} />
            <p>[선택] 쇼핑정보 E-mail 수신 동의</p>
          </CheckCon>
          <CheckCon>
            <input type="checkbox" name="sendMessage" onClick={(e) => updateCheck(e)} />
            <p>[선택] 쇼핑정보 SMS 수신 동의</p>
          </CheckCon>
        </div>
      </FormCheckPromote>
      <FormNotice>
        <span>※ 약관 및 개인정보 처리방침은 홈페이지 하단에 전문이 게제되어 있습니다.</span>
        <span>※ 선택 항목으로 동의하지 않아도 불이익을 받지 않습니다.</span>
        <p>만 14세 미만은 회원가입 및 서비스 이용이 불가합니다.</p>
      </FormNotice>
      <Button type="submit"
        width="100%"
        height="50px"
        background="#000000"
        color="#ffffff"
        fontSize="16px"
        radius="0"
      >회원가입하기 (만 14세 이상)</Button>
    </Registerform>
  )
}

const Registerform = styled.form`
  h6 {
    margin: 0 0 10px;
  }

  & > section {
    margin: 0 0 40px;
    img { width: 100% };
    span {
      display: inline-block;
      width: 100%;
      color: ${({ theme }) => theme.gray3};
      font-size: 12px;
    }
  }
`;

const FormInputCon = styled.section`
  p {
    margin: 5px 0 10px;
    color: ${({ theme }) => theme.redError};
    font-size: 10px;
  }
`;

const CheckCon = styled.div`
  ${flexAlign};
  margin: 5px 0 10px;

  input {
    width: 16px;
    height: 16px;
    margin: 0 7px 0 0;
  }

  p {
    font-size: 14px;
  }
`;

const FormCheckClause = styled.section`
  position: relative;
  margin: 0 0 40px;

  a {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 12px;
    color: ${({ theme }) => theme.gray3};
  }

  .clause-scroll-box {
    height: 150px;
    padding: 15px 5px;
    border: 1px solid ${({ theme }) => theme.gray1};
    overflow: auto;

    & > p {
      font-size: 12px;
      strong, p {
        line-height: 1.5;
      }
    }
  }
`;

const FormCheckInfo = styled.section`
  span {
    line-height: 1.5;
  }
`;

const FormCheckPromote = styled.section`
  .check-sending {
    margin: 25px 0 0;

    ${CheckCon} {
      p {
        font-size: 12px;
        color: ${({ theme }) => theme.gray3};
        text-decoration: underline;
      }
    }
  }
`;

const FormNotice = styled.section`
  span {
    margin: 5px 0; 
  }
  p {
    width: 100%;
    margin: 20px 0 0;
    text-align: center;
  }
`;



export default RegisterForm
