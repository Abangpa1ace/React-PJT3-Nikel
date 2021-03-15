import React, { useState } from 'react';
import styled from 'styled-components';
import { flexBetween, flexCenter } from '../../../../Styles/theme';

const ModalSizeGuide = () => {
  const [isInch, setIsInch] = useState(false);

  return (
    <SizeGuide>
      <h1>남성 & 성인 공용 신발</h1>
      <p>측정 결과와 아래 차트를 참고해 자신의 신발 사이즈를 확인해보세요.</p>
      <div className="chart-title">
        <h2>사이즈 가이드 (남성 신발)</h2>
        <SlideButton onClick={() => setIsInch(!isInch)}>
          <SlideUnit isInch={isInch}>
            <span>cm</span>
            <span>in</span>
          </SlideUnit>
          <SlideFocus isInch={isInch} />
        </SlideButton>
      </div>
      <SizeChart>
        <img src={isInch ? '/Images/size-in.png' : '/Images/size-cm.png'} alt="size-img" />
      </SizeChart>
      <p>* 제품 모델 및 개개인의 발볼 너비와 발모양의 특성에 따라 착용시 미세한 차이가 있을 수 있습니다.</p>
    </SizeGuide>
  )
}

const SizeGuide = styled.div`
  padding: 40px 60px;

  h1 {
    font-weight: 400;
  }

  p {
    margin: 40px 0;
    color: ${({ theme }) => theme.gray3};
  }

  div.chart-title {
    ${flexBetween};

    h2 {
      padding: 0 0 0 10px;
      border-left: 1px solid #FF0102;
      font-weight: normal;
    }
  }
`;

const SlideButton = styled.div`
  position: relative;
  width: 100px;
  height: 30px;
  padding: 3px;
  background: ${({ theme }) => theme.gray1};
  border-radius: 15px;
  cursor: pointer;
`;

const SlideUnit = styled.span`
  ${flexCenter};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  font-size: 14px;
  z-index: ${({ theme }) => theme.z_OneUp};

  span {
    margin: 0 17px;

    &:first-child { 
      color: ${({ isInch }) => isInch ? 'initial' : '#ffffff'};
    };

    &:last-child { 
      color: ${({ isInch }) => !isInch ? 'initial' : '#ffffff'};
    };
  }
`;

const SlideFocus = styled.div`
  width: 55%;
  height: 100%;
  border-radius: 15px;
  background: ${({ theme }) => theme.black};
  transform: ${({ isInch }) => isInch && 'translateX(80%)'};
  transition: ${({ theme }) => theme.transition};
`;

const SizeChart = styled.div`
  margin: 20px 0 40px;
  img {
    width: 800px;
  }
`;

export default ModalSizeGuide
