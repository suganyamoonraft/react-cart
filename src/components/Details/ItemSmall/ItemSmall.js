import React from 'react';

import Img from '../../../asset/images/sbg.PNG';

const ItemSmall = (props) => {
  return (
    <div className="item-sm-wrapper">
      <img className="small-img" src={Img} />
      <p>{props.data.name}</p>
    </div>
  );
};

export default ItemSmall;
