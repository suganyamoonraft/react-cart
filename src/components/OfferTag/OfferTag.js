import React from 'react';

import './style.scss';

const OfferTag = (props) => {
  return (
    <div className="offer-div">
      <p>{`${props.discount}%`}</p>
    </div>
  );
};

export default OfferTag;
