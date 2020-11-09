import React from 'react';

import FlexContainer from '../commonComponents/FlexContainer/FlexContainer';
import './style.scss';

const Total = (props) => {
  const getTotal = () =>
    props.data.reduce(
      (total, data) => total + data.price.display * data.count,
      0
    );

  const getDiscount = () =>
    props.data.reduce(
      (total, data) =>
        total + (data.price.display - data.price.actual) * data.count,
      0
    );

  const getFinalAmount = () =>
    props.data.reduce(
      (total, data) => total + data.price.actual * data.count,
      0
    );

  return (
    <div className="total">
      <div className="total-container">
        <p className="total-heading">Total</p>
        <FlexContainer
          data={{
            name: `Items(${props.data.length})`,
            separator: ':',
            value: getTotal(),
          }}
        />
        <FlexContainer
          data={{
            name: 'discount',
            separator: ':',
            value: `-${getDiscount()}`,
          }}
        />
        <FlexContainer
          data={{ name: 'type discount', separator: ':', value: '-0' }}
        />
      </div>
      <div className="order-total">
        <FlexContainer
          data={{ name: 'total', separator: ':', value: getFinalAmount() }}
        />
      </div>
    </div>
  );
};

export default Total;
