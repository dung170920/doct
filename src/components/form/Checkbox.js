import React from 'react';
import Label from './Label';
import PropTypes from 'prop-types';

const Checkbox = props => {
  const {
    name,
    children,
    handleCheckboxChange,
    // checked = false,
    ...rest
  } = props;

  return (
    <div className='flex items-center text-sm'>
      <input
        type='checkbox'
        {...rest}
        id={name}
        onChange={handleCheckboxChange}
        className='h-5 w-5 select-none rounded border border-gray-400 bg-transparent text-indigo focus:outline-none focus:ring-transparent'
      />
      <Label htmlFor={name} className='pl-4'>
        {children}
      </Label>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  children: PropTypes.string,
  handleCheckboxChange: PropTypes.func,
  // checked: PropTypes.bool,
};

export default Checkbox;
