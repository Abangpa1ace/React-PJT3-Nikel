import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { flexBetweenStart } from '../../../Styles/theme';
import { FOOTER_LINK_CLIENT } from '../FooterData';

const FooterInfo = () => {
  return (
    <Footerinfo>
      <div className="left">
        <p>(유)나이키코리아 대표 KIM MYUNG HEE | 서울 강남구 테헤란로 152 강남파이낸스센터 31층</p>
        <p>통신판매업신고번호 2011-서울강남-03461 | 등록번호 220-88-09068 <Link to="/">사업자정보확인</Link></p>
        <p>고객센터 전화문의 <Link to={FOOTER_LINK_CLIENT[0].link}>080-022-0182</Link></p>
        <p>FAX 02-6744-5880 | E-mail service@nike.co.kr | 호스팅서비스사업자 브리즈</p>
      </div>
      <div className="right">
        <p>안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한</p>
        <p>KG 이니시스의 구매안전 서비스 (채무지급보증)를 이용하실 수 있습니다.</p>
        <p>온라인디지털콘텐츠사업발전법에 의한 <Link to="/" className="underbar">콘텐츠보호안내 자세히보기</Link></p>
      </div>
    </Footerinfo>
  )
}

const Footerinfo = styled.section`
  ${flexBetweenStart};
  width: ${({ theme }) => theme.footerWidth};
  padding: 20px 0 40px;

  div {
    p {
      margin: 0 0 8px;
      font-size: 11px;
      color: ${({ theme }) => theme.gray3};

      a {
        color: ${({ theme }) => theme.gray0};
        &.underbar { text-decoration: underline; };
      }
    }

    &.left { width: 50%; };
    &.right { width: 40%; };
  }
`;

export default FooterInfo
