import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import '../style.scss';

const Quantity = (props) => {
  return (
    <div className="quantity-wrapper">
      <FontAwesomeIcon
        icon={faMinus}
        className="icon"
        onClick={() => props.modifyItemCount('remove', props.data.id)}
      />
      <p className="quantity">{props.data.count}</p>
      <FontAwesomeIcon
        icon={faPlus}
        className="icon"
        onClick={() => props.modifyItemCount('add', props.data.id)}
      />
    </div>
  );
};

export default Quantity;
