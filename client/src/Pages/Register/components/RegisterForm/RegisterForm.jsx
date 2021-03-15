import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import FormInputWrapper from './FormInputWrapper';
import FormCheckWrapper from './FormCheckWrapper';
import { Button } from '../../../../Common/StyledCommon';
import { registerRequest } from '../../../../Store/Action/registerAction';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [registerValue, setRegisterValue] = useState({
    email: '',
    password: '',
    passwordAgain: '',
    fullName: '',
    phone: '',
  })

  const [isChecked, setIsChecked] = useState({
    clause: false,
    privacy: false,
    privacyMore: false,
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

  const submitRegister = async (event) => {
    event.preventDefault();

    const { email, password, fullName, phone } = registerValue;
    if (inspectRequest()) {
      const requestData = {
        information: { email, password, fullName, phone},
        checked: { ...isChecked },
      }
      dispatch(registerRequest(requestData));
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
    if (!isChecked.privacy) {
      alert('개인정보 수집, 이용에 동의해야 합니다.')
      return;
    }
    return true;
  }

  return (
    <Registerform onSubmit={(e) => submitRegister(e)}>
      <FormInputWrapper registerValue={registerValue} setRegisterValue={setRegisterValue} registerValid={registerValid} setRegisterValid={setRegisterValid} />
      <FormCheckWrapper isChecked={isChecked} setIsChecked={setIsChecked} />
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

  section {
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

export default RegisterForm;