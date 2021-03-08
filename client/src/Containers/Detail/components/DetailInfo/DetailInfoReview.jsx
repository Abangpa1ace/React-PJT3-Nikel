import React from 'react'
import styled from 'styled-components'
import InfoContainerFold from './InfoContainerFold';
import { RiStarSFill } from 'react-icons/ri';
import { flexCenter } from '../../../../Styles/theme';

const DetailInfoReview = () => {
  const ReviewStars = () => {
    return (
      <StarsCon>
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
        <RiStarSFill />
      </StarsCon>
    )
  }

  return (
    <InfoContainerFold headerTitle="리뷰(50)" headerDesc={ReviewStars()}>
      <ReviewContent>
        <h5>일반지역 배송안내</h5>
        <p>* 배송지역 : 전국(일부 지역 제외)</p>
        <p>* 배송비 : 상품의 구매금액에 상관없이 모든 상품 무료배송</p>
        <p>* 배송기간 : 결제 후 3일 이내 (토요일, 공휴일 제외)</p>
        <p>* 배송안내 : 상품의 출고지 또는 물류센터 보관장소에 따라 분리 배송</p>
      </ReviewContent>
    </InfoContainerFold>
  )
}

const ReviewContent = styled.div`
  h5 { margin: 0 0 20px; }
  p {
    font-size: 14px;
    line-height: 1.7; 
  }
`;

const StarsCon = styled.div`
  ${flexCenter};

  svg {
    margin: 0 0 0 1px;
  }
`;

export default DetailInfoReview
