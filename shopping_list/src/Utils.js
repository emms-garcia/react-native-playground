import React from 'react';

export const itemProp = React.PropTypes.shape({
  name: React.PropTypes.string.isRequired,
  quantity: React.PropTypes.string.isRequired,
  price: React.PropTypes.string.isRequired,
});

export const getUID = () => {
  return (new Date()).getTime();
};
