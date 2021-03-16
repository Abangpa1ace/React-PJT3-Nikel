import React, { useState } from 'react';
import FoldableReview from './FoldableReview';
import FoldableDelivery from './FoldableDelivery';
import FoldableReturn from './FoldableReturn';

const InfoFoldable = ({ review }) => {
  const [showTarget, setShowTarget] = useState(null);

  const isFold = (label) => {
    return label !== showTarget;
  }

  const toggleFold = (label) => {
    setShowTarget(label === showTarget ? null : label);
  }

  return (
    <div>
      <FoldableReview review={review} label="review" isFold={isFold} toggleFold={toggleFold} />
      <FoldableDelivery label="delivery" showTarget={showTarget} isFold={isFold} toggleFold={toggleFold}/>
      <FoldableReturn label="return" showTarget={showTarget} isFold={isFold} toggleFold={toggleFold}/>
    </div>
  )
}

export default InfoFoldable;
