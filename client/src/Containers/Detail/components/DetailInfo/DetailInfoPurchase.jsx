import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginModalOn } from '../../../../Store/Action/loginAction';
import { addCart } from '../../../../Store/Action/cartAction';
import DetailInfoButton from './DetailInfoButton';
import { Button } from '../../../../Common/StyledCommon';
import { flexAlign, flexCenter } from '../../../../Styles/theme';

const DetailInfoPurchase = ({ history, setModalMode, sizes, id, images, model, name, category, price }) => {
  const { isAuthorized } = useSelector(state => state.author);
  const dispatch = useDispatch();

  const [selectSize, setSelectSize] = useState(0);
  const [selectCount, setSelectCount] = useState(1);
  const [sizeAlert, setSizeAlert] = useState(false);
  const [countAlert, setCountAlert] = useState(false);

  const clickSize = (sizeVal) => {
    selectSize === 0 ? setSelectSize(sizeVal) : setSelectSize(0);
    sizeAlert && setSizeAlert(false);
  };

  const minusCount = () => {
    if (selectCount > 1) {
      const downCount = selectCount - 1;
      setSelectCount(downCount);
    }
    if (countAlert) {
      setCountAlert(false);
    }
  }

  const plusCount = () => {
    const upCount = selectCount + 1;
    const maxCount = sizes[selectSize];
    if (upCount > maxCount) {
      setCountAlert(true)
    }
    else {
      setSelectCount(upCount);
    }
  }

  const beforePurchase = () => {
    if (!isAuthorized) {
      dispatch(loginModalOn());
      return false;
    }
    else if (selectSize === 0) {
      setSizeAlert(true)
      return false;
    }
    else {
      return true;
    }
  }

  const goToPurchase = () => {
    const ableToPurchase = beforePurchase();
    if (ableToPurchase) {
      setSizeAlert(false)
      history.push("/purchase")
    }
  }

  const goToCart = () => {
    const ableToPurchase = beforePurchase();
    if (ableToPurchase) {
      const newCartItem = {
        id,
        image: images[0],
        model,
        name,
        price,
        size: selectSize,
        count: selectCount,
      }
      dispatch(addCart(newCartItem));
      history.push("/cart")
    }
  }

  return (
    <InfoPurchase>
      <header>
        <p>사이즈 선택</p>
        <span onClick={() => setModalMode('size')} >사이즈 가이드</span>
      </header>
      <InfoPurchaseSize sizeAlert={sizeAlert}>
        {sizes && Object.entries(sizes).map(size => 
          <li key={size[1]}>
            <SizeButton
              selected={size[0] === selectSize}
              disabled={size[1] === 0}
              onClick={() => clickSize(size[0])}
            >{size[0]}</SizeButton>
          </li>
        )}
      </InfoPurchaseSize>
      {sizeAlert && <InfoAlerter>사이즈를 선택해주세요.</InfoAlerter>}
      <InfoPurchaseNotify onClick={() => setModalMode('notify')}>
        ✔︎ NOTIFY ME 입고 알림 신청
      </InfoPurchaseNotify>
      <InfoPurchaseCount>
        <CountWrapper countAlert={countAlert} >
          <span>수량</span>
          <span>{selectCount}</span>
          <Button
            padding="20px"
            color={({ theme, disabled }) => disabled ? theme.gray1 : theme.black}
            fontSize="28px"
            disabled={selectCount === 1}
            onClick={() => minusCount()}
            >-</Button>
          <Button
            padding="20px"
            fontSize="28px"
            onClick={() => plusCount()}
            >+</Button>
        </CountWrapper>
        {countAlert && <InfoAlerter>{sizes[selectSize]}개까지 구매가 가능합니다.</InfoAlerter>}
      </InfoPurchaseCount>
      <DetailInfoButton goToPurchase={goToPurchase} goToCart={goToCart} />
    </InfoPurchase>
  )
}

const InfoPurchase = styled.div`
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

const InfoPurchaseSize = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 7px;
  margin: 30px 0 0;
  border: ${({ sizeAlert, theme }) => sizeAlert && `1px solid ${theme.redError}`};
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

const InfoAlerter = styled.p`
  padding: 10px 0 0 5px;
  color: ${({ theme }) => theme.redError};
  font-size: 14px;
`;

const InfoPurchaseNotify = styled.p`
  margin: 30px 0 0px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`;

const InfoPurchaseCount = styled.div`
  margin: 20px 0 0px;
`;

const CountWrapper = styled.div`
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

export default withRouter(DetailInfoPurchase);
