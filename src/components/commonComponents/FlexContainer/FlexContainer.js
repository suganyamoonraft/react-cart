import React from 'react';

import './style.scss';

const FlexContainer = (props) => {
  return (
    <div className="item-container">
      <p>{props.data.name}</p>
      <p>{props.data.separator}</p>
      <p>{props.data.value}</p>
    </div>
  );
};

export default FlexContainer;
