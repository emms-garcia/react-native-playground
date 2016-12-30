import React from 'react';

export const employeeProp = React.PropTypes.shape({
  name: React.PropTypes.string.isRequired,
  phone: React.PropTypes.string.isRequired,
  shift: React.PropTypes.string.isRequired,
  uid: React.PropTypes.string.isRequired,
});
