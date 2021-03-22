import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../Styles/theme';

const Main = () => {
  return (
    <MainPage>
      <h1>Here is Main Page!</h1>
      <p>네브바 메뉴의 Men - 라이프스타일, 러닝 을 선택해주세요</p>
    </MainPage>
  )
}

const MainPage = styled.div`
  ${flexCenter};
  height: 100vh;
`;

export default Main
