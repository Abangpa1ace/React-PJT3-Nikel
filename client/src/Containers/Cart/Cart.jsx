import React from 'react'
import styled from 'styled-components';
import RecommendCarousel from '../../Components/RecommendCarousel/RecommendCarousel';
import { flexCenter } from '../../Styles/theme';

const Cart = () => {
  return (
    <CartPage>
      <CartHeader>
        <h1>장바구니</h1>
        <p>{`${0}개 상품`}</p>
      </CartHeader>
      <CartWrapper>
        {!false && 
        <CartCoupon>
          <p>사용 가능한 쿠폰이 있습니다.</p>
          <p>아래 프로모 코드 입력란에 입력하여 사용하세요.</p>
        </CartCoupon>}
        <div className="cart-container">
          <CartMain>

          </CartMain>
          {true && <CartOrder />}
        </div>
      </CartWrapper>
      {/* <RecommendCarousel /> */}
    </CartPage>
  )
}

const CartPage = styled.div`
  padding: 40px 0;
`;

const CartHeader = styled.header`
  margin: 0 0 40px;
  text-align: center;
  
  h1 {
    font-size: 28px;
    font-weight: 500;
  }

  p {
    margin: 15px 0 0;
    color: ${({ theme }) => theme.gray3};
  }
`;

const CartWrapper = styled.div`
  width: ${({ theme }) => theme.detailWidth};
  padding: 0 40px;
  margin: 0 auto;
  
  div.cart-container {
    ${flexCenter};
    width: 100%;
    margin: 15px 0;
  }
  
  * {
    font-size: 14px;
  }
`;

const CartCoupon = styled.div`
  text-align: left;
  p {
    color: ${({ theme }) => theme.orange};
    line-height: 1.5;
  }
`;

const CartMain = styled.main`
  width: 100%;
  height: 400px;
  border-top: 1px solid ${({ theme }) => theme.gray0C};
  border-bottom: 1px solid ${({ theme }) => theme.gray0C};
`;

const CartOrder = styled.aside`
  width: 400px;
  height: 400px;
  margin: 0 0 0 40px;
  border: 1px solid red;
`;

export default Cart
