import React from 'react'
import styled from 'styled-components'
import InfoContainerFold from '../shared/InfoContainerFold'
import StarRatings from 'react-star-ratings';
import { flexAlign } from '../../../../../Styles/theme';

const FoldableReview = ({ review, label, isFold, toggleFold }) => {
  let reviewAmount = 0; 
  let reviewAverage = 0;
  if (review) {
    reviewAmount = review.length;
    reviewAverage = review.map(e => e.score).reduce((acc, cur) => acc + cur) / reviewAmount;
  }

  return (
    <InfoContainerFold
      isFold={isFold(label)}
      toggleFold={() => toggleFold(label)}
      headerTitle={reviewAmount === 0 ? '리뷰' : `리뷰 (${reviewAmount})`} 
      headerDesc={
        <StarRatings rating={reviewAverage} starDimension="16px" starSpacing="3px" />
      }
      height="100%">
      <ReviewHeader>
        <div className="header-score">
          <StarRatings rating={reviewAverage} starDimension="16px" starSpacing="3px" />
          <h5>{reviewAverage.toFixed(2)}점</h5>
        </div>
        <p>리뷰 작성하기</p>
      </ReviewHeader>
      <ReviewList>
        {review && review.slice(0,3).map((content) => {
          const { title, score, name, date, model, desc, images } = content;
            return (
              <li>
                <h4>{title}</h4>
                <div className="align-area">
                  <StarRatings rating={score} starDimension="14px" starSpacing="1px" />
                  <span>{name}&nbsp;{date}</span>
                  <span>{model}</span>
                </div>
                <p>{desc}</p>
                {images && images.map(image =>
                  <img src={image} alt="review-img" />  
                )}
              </li>
            )
          })}
      </ReviewList>
    </InfoContainerFold>
  )
}

const ReviewHeader = styled.div`
  margin: 0 0 30px;

  div.header-score {
    ${flexAlign};
    h5 { margin: 0 0 0 20px; };
  }

  p {
    margin: 10px 0 0;
    color: ${({ theme }) => theme.gray3};
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ReviewList = styled.ul`
  li {
    margin: 20px 0;

    div.align-area {
      ${flexAlign};
      margin: 10px 0 20px;

      span {
        display: inline-block;
        margin: 0 0 0 20px;
        color: ${({ theme }) => theme.gray2};
        font-size: 12px;
      }
    }
  }

  p {
    font-size: 14px;
    margin: 0 0 30px;
  }

  img {
    width: 200px;
    object-fit: cover;
    margin: 5px 0;
  }
`;

export default FoldableReview
