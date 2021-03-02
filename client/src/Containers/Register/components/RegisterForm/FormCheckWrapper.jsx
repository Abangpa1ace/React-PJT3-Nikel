import React from 'react';
import styled from 'styled-components';
import { CLAUSE } from '../../../../Data/config';
import { flexAlign } from '../../../../Styles/theme';

const FormCheckWrapper = ({ isChecked, setIsChecked }) => {

  const updateCheck = (event) => {
    const { name, checked } = event.target;
    setIsChecked({...isChecked, [name]: checked})
  }

  return (
    <Formcheckwrapper>
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
          <input type="checkbox" name="privacy" onClick={(e) => updateCheck(e)} />
          <p>[필수] 개인정보 수집, 이용에 동의 합니다.</p>
        </CheckCon>
        <span>※ 약관 및 개인정보 처리방침은 홈페이지 하단에 전문이 게제되어 있습니다.</span>
        <span>※ 이용약관 및 개인정보 수집, 이용 내용에 대해 동의/거부가 가능하며, <br />이 경우 회원가입 및 관련 서비스는 이용이 불가합니다.</span>
      </FormCheckInfo>
      <FormCheckPromote>
        <h6>선택적 개인정보 수집, 이용 동의</h6>
        <img src="./Images/info2.png" alt="check-info-alternative-img2" />
        <CheckCon>
          <input type="checkbox" name="privacyMore" onClick={(e) => updateCheck(e)} />
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
    </Formcheckwrapper>
  )
}

const Formcheckwrapper = styled.div`
  width: 100%;
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

export default FormCheckWrapper
