import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import itemsList_MOCK from '../../Data/data';
import { flexAlign, flexBetween } from '../../Styles/theme';

const RecommendCarousel = () => {
  const recommendList = Array.from({ length: Math.ceil(itemsList_MOCK.length/5) }, (_,i) => itemsList_MOCK.slice(i*5, i*5+5));
  const [carouselIdx, setCarouselIdx] = useState(0);

  useEffect(() => {
    const changeIndex = setInterval(() => {
      setCarouselIdx((carouselIdx + 1)%(recommendList.length))
    }, 15000)
    return () => clearInterval(changeIndex)
  }, [carouselIdx, recommendList])

  const setCarousel = (index) => {
    return (
      <>
      {recommendList.map((fiveItems, idx) => {
        return (
          <RecommendWrapper className={
            idx === index ? 'active'
            : (idx === index - 1) || (index === 0 && idx === recommendList.length - 1) ? 'prev'
            : 'next'
          }>
            {fiveItems.map((item) => {
              const { id, images, name, category, colors, price } = item;
              return (
                <RecommendItem to={`/detail/${id}`}>
                  <li key={name}>
                    <img src={images[0]} alt={`recommend-img-${name}`} />
                    <span>{category && Object.values(category).map(e => e.title).join(' ')}</span>
                    <span>{colors.otherColors.length+1} 컬러</span>
                    <p>{price.toLocaleString()} 원</p>
                  </li>
                </RecommendItem>
              )
              })}
          </RecommendWrapper>
        )
      })}
      </>
    )
  }

  return (
    <Recommendcarousel>
      <div className="recommend-wrapper">
        <h2>추천 상품</h2>
        <Carousel>
          {setCarousel(carouselIdx)}
        </Carousel>
        <CarouselButton>
          {recommendList.map((_, i) =>
            <button className={i === carouselIdx ? 'focus' : ''} onClick={() => setCarouselIdx(i)}></button>
          )}
        </CarouselButton>
      </div>
    </Recommendcarousel>
  )
}

const Recommendcarousel = styled.section`
  margin: 100px 0 20px;

  div.recommend-wrapper {
    max-width: ${({ theme }) => theme.detailWidth};
    padding: 0 40px;
    margin: 0 auto;
    text-align: center;

    h2 {
      margin: 0 0 20px;
    }
  }
`;

const Carousel = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  margin: 0 auto;
`;

const RecommendWrapper = styled.ul`
  ${flexAlign};
  justify-content: flex-start;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: ${({ theme }) => theme.transition};
  opacity: 0;

  &.active {
    opacity: 1;
    transform: translateX(0);
  }
  &.prev {
    transform: translateX(-100%);
  }
  &.next {
    transform: translateX(100%);
  }
`;

const RecommendItem = styled(Link)`
  width: 20%;
  margin: 0 20px 0 0;

  &:last-child {
    margin: 0;
  }

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }
`;

const CarouselButton = styled.div`
  ${flexBetween};
  width: 30px;
  margin: 40px auto 0;

  button {
    width: 8px;
    height: 8px;
    padding: 3px;
    background: ${({ theme }) => theme.gray0C};
    border-radius: 50%;
    &.focus {
      background: ${({ theme }) => theme.black};
    }
  }
`;

export default RecommendCarousel

