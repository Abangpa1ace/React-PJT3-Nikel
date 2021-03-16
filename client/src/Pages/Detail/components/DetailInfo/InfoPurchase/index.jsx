import React, {useState} from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginModalOn } from '../../../../../Store/Action/loginAction';
import { addCart } from '../../../../../Store/Action/cartAction';
import PurchaseSize from './PurchaseSize';
import PurchaseButton from './PurchaseButton';
import PurchaseCount from './PurchaseCount';

const InfoPurchase = ({ history, setModalMode, sizes, id, images, model, name, category, price }) => {
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
    <Infopurchase>
      <header>
        <p>사이즈 선택</p>
        <span onClick={() => setModalMode('size')} >사이즈 가이드</span>
      </header>
      <PurchaseSize sizes={sizes} selectSize={selectSize} clickSize={clickSize} sizeAlert={sizeAlert} />
      {sizeAlert && <InfoAlerter>사이즈를 선택해주세요.</InfoAlerter>}
      <PurchaseNotify onClick={() => setModalMode('notify')}>
        ✔︎ NOTIFY ME 입고 알림 신청
      </PurchaseNotify>
      <PurchaseCount sizes={sizes} selectSize={selectSize} selectCount={selectCount} countAlert={countAlert}
        minusCount={minusCount} plusCount={plusCount} />
      <PurchaseButton goToPurchase={goToPurchase} goToCart={goToCart} />
    </Infopurchase>
  )
}

const Infopurchase = styled.div`
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

export const InfoAlerter = styled.p`
  padding: 10px 0 0 5px;
  color: ${({ theme }) => theme.redError};
  font-size: 14px;
`;

const PurchaseNotify = styled.p`
  margin: 30px 0 0px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`;

export default withRouter(InfoPurchase);
