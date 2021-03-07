import React from 'react';
import styled from 'styled-components';

const Detail = () => {
  return (
    <DetailPage>
      <DetailWrapper>

      </DetailWrapper>
    </DetailPage>
  )
}

const DetailPage = styled.div`
  color: red;
`;

const DetailWrapper = styled.main`
  max-width: ${({ theme }) => theme.detailWidth};
  height: 1200px;
  margin: 60px auto 0;
  background: yellow;
`;

export default Detail
