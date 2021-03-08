import React from 'react'
import styled from 'styled-components';
import InfoContainer from './InfoContainer';

const DetailInfoExplain = ({ model, colors, explanation }) => {
  console.log(colors);
  console.log(explanation);

  return (
    <InfoContainer>
      <ExplainFeature>
        <h5>{explanation && explanation.features[0].title}</h5>
        <p>{explanation && explanation.features[0].desc}</p>
        <p>{colors && `* 현재 컬러 : ${colors.title}/${colors.sub.map(e => e.title).join('/')}`}</p>
        <p>{`* 스타일 : ${model}`}</p>
        <ExplainMore>더 보기</ExplainMore>
      </ExplainFeature>
    </InfoContainer>
  )
}

const ExplainFeature = styled.div`
  p {
    line-height: 1.5;
    font-size: 14px;

    &:nth-child(2) { margin: 30px 0 };
  }
`;

const ExplainMore = styled.p`
  margin: 15px 0 0;
  color: ${({ theme }) => theme.gray3};
  text-decoration: underline;
`;

export default DetailInfoExplain
