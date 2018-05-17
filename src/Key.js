import React from 'react';

const Key = ({
  id, value, isClickable, onClickAction,
}) => (
  <div
    className="number"
    style={{ opacity: isClickable ? 1 : 0.3 }}
    onClick={() => onClickAction(id)}
  >
    {value}
  </div>
);

export default Key;
