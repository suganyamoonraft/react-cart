import React from 'react';

import FlexContainer from '../commonComponents/FlexContainer/FlexContainer';
import ItemSmall from '../Details/ItemSmall/ItemSmall';
import Quantity from '../Details/Quantity/Quantity';
import './style.scss';

const Details = (props) => {
  return props.data.length > 0 ? (
    <div>
      <hr />
      <FlexContainer
        data={{ name: 'Items', separator: 'Qty', value: 'rate' }}
      />
      <hr />
      {props.data.map((data) => (
        <div className="details-wrapper" key={data.id}>
          <ItemSmall data={data} />
          <Quantity data={data} modifyItemCount={props.modifyItemCount} />
          <p>{data.price.actual}</p>
        </div>
      ))}
      <hr />
    </div>
  ) : (
    <p>Cart Empty</p>
  );
};

export default Details;
