import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../Styles/theme';

const Main = () => {
  return (
    <MainPage>
      <h1>Here is Main Page!</h1>
    </MainPage>
  )
}

const MainPage = styled.div`
  ${flexCenter};
  height: 100vh;
`;

export default Main
