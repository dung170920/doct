import React from 'react';
import PropTypes from 'prop-types';

const FormGroup = ({ children }) => {
  return <div className='flex flex-col gap-y-2 pb-4 '>{children}</div>;
};

FormGroup.propTypes = {
  children: PropTypes.node,
};

export default FormGroup;
