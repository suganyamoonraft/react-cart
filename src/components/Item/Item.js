import React, { useState } from 'react';

import './style.scss';
import Img from '../../asset/images/sbg.PNG';
import OfferTag from '../OfferTag/OfferTag';

const Item = (props) => {
  return (
    <div className="item-wrapper">
      {props.data.map((data, index) => (
        <div className="items-container" key={index}>
          <OfferTag discount={data.discount} />
          <div className="item-img-container">
            <img src={Img} alt="item-img" />
          </div>
          <div className="bottom">
            <p className="item-name">{data.name}</p>
            <div className="wrapper">
              <p className="price-offer">{data.price.display}</p>
              <p className="price-actual">{data.price.actual}</p>
              <button onClick={() => props.addToCarthandler(data)}>
                {data.count > 0 ? 'Remove Item' : 'Add To Cart'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
