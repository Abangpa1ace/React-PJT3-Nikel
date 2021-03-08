import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { flexBetween } from '../../../../Styles/theme';
import InfoContainer from './InfoContainer';
import { IoIosArrowUp } from 'react-icons/io';

const InfoContainerFold = ({headerTitle, headerDesc, children}) => {
  const [isFold, setIsFold] = useState(true);

  return (
    <InfoContainer>
      <FoldHeader>
        <h4>{headerTitle}</h4>
        <div>
          <div>{headerDesc}</div>
          <FoldButton isFold={isFold} onClick={() => setIsFold(!isFold)}>
            <IoIosArrowUp />
          </FoldButton>
        </div>
      </FoldHeader>
      <FoldContent isFold={isFold}>
        {children}
      </FoldContent>
    </InfoContainer>
  )
}

const FoldHeader = styled.header`
  &, & > div {
    ${flexBetween};
  }

  h4 {
    font-size: 15px;
  }

  div {
    div { 
      color: ${({ theme }) => theme.gray3}; 
      font-size: 14px;
    }
  }
`;

const FoldContent = styled.div`
  position: relative;
  top: 0;
  overflow: hidden;
  transition: ${({ theme }) => theme.transition};

  ${({ isFold }) => isFold
    ? css`
      height: 0;
      visibility: hidden;
    `
    : css`
      height: 150px;
      padding: 20px 0;
      visibility: visible;
    `
  }
`;

const FoldButton = styled.button`
  margin: 0 0 0 15px;
  transform: ${({ isFold }) => isFold ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export default InfoContainerFold
