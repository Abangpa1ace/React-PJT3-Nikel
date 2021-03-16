import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateCart } from '../../../../Store/Action/cartAction';
import { Button } from '../../../../Components/Common/StyledCommon';
import { flexBetween, flexCenter, flexAlign } from '../../../../Styles/theme';

const ModalInfos = ({ editItemData, editItem, setEditItem, closeModal }) => {
  const [countAlert, setCountAlert] = useState(false);
  const dispatch = useDispatch();
  const { category, sizes } = editItemData;
  const { name, price, count, size } = editItem;

  const minusCount = () => {
    setCountAlert(false);
    if (count > 1) {
      const downCount = count - 1;
      setEditItem({ ...editItem, count: downCount })
    }
  }

  const plusCount = () => {
    const upCount = count + 1;
    if (upCount > sizes[size]) {
      setEditItem({ ...editItem, count: sizes[size] })
      setCountAlert(true)
    }
    else {
      setEditItem({ ...editItem, count: upCount })
    }
  }

  const submitEditItem = (item) => {
    dispatch(updateCart(item))
    closeModal();
  }

  return (
    <Modalinfos>
      <InfoTitle>
        <p>
          <span>{category && Object.values(category).map(e => e.title).join(' ')}</span>
          <span className="bold">{price && `${price.toLocaleString()} 원`}</span>
        </p>
        <h1>{name}</h1>
      </InfoTitle>
      <InfoEdit>
        <header>
          <p>사이즈 선택</p>
        </header>
        <InfoEditSize>
          {sizes && Object.entries(sizes).map(size => 
            <li key={size[1]}>
              <SizeButton
                selected={size[0] === String(editItem.size)}
                disabled={size[1] === 0}
                onClick={() => setEditItem({...editItem, size: size[0]})}
              >{size[0]}</SizeButton>
            </li>
          )}
        </InfoEditSize>
        <InfoEditCount countAlert={countAlert} >
          <span>수량</span>
          <span>{count}</span>
          <Button
            padding="20px"
            color={({ theme, disabled }) => disabled ? theme.gray1 : theme.black}
            fontSize="28px"
            disabled={count === 1}
            onClick={() => minusCount()}
            >-</Button>
          <Button
            padding="20px"
            fontSize="28px"
            onClick={() => plusCount()}
            >+</Button>
        </InfoEditCount>
        {countAlert && <InfoAlerter>{sizes !== {} && `${sizes[size]}개까지 구매가 가능합니다.`}</InfoAlerter>}
        <Button
          width="100%"
          height="60px"
          margin="30px 0 0"
          color={({ theme }) => theme.gray2}
          border={({ theme }) => theme.gray0C}
          radius="30px"
          onClick={() => submitEditItem(editItem)}
        >
          옵션변경하기
        </Button>
      </InfoEdit>
    </Modalinfos>
  )
}

const Modalinfos = styled.section`
  width: 50%;
`;

const InfoTitle = styled.div`
  margin: 0 0 50px;
  & > p {
    ${flexBetween};
    
    span.bold {
      font-weight: bold;
    }
  }
  h1 {
    font-size: 30px;
    margin: 20px 0 40px;
    word-break: keep-all;
  }
`;

const InfoEdit = styled.div`
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    p {
      font-weight: bold;
    }
    span {
      font-size: 12px;
      color: ${({ theme }) => theme.gray1};
      cursor: pointer;
    }
  }
`;

const InfoEditSize = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 7px;
  margin: 30px 0;
`;

const SizeButton = styled.button`
  ${flexCenter};
  width: 100%;
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.gray0C};
  border-radius: 5px;
  font-size: 15px;
  &:hover { 
    border: 1px solid ${({ disabled, theme }) => !disabled && theme.black}
  };
  ${({ selected, disabled, theme }) =>
    selected ?
      css`
        background: ${theme.black};
        color: #ffffff;
      `
    : disabled ?
      css`
        background: ${theme.gray0};
        color: ${theme.gray1};
      `
    : css`
        background: #ffffff;
        color: 'initial';
      `
  }
`;

const InfoEditCount = styled.div`
  ${flexAlign};
  border-bottom: 1px solid;
  border-color: ${({ theme, countAlert }) => countAlert ? theme.redError : theme.gray0C};

  span {
    width: 30px;

    &:nth-child(2) {
      margin: 0 0 0 30px;
    }
  }
`;

const InfoAlerter = styled.p`
  padding: 10px 0 0 5px;
  color: ${({ theme }) => theme.redError};
  font-size: 14px;
`;

export default ModalInfos;
