import React from 'react';

const Key = ({ value, isClickable }) => (
  <div className="number" style={{ opacity: isClickable ? 1 : 0.3 }}>
    {value}
  </div>
);

export default Key;
