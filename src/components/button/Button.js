import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'utils/classNames';

const Button = ({ type, children, className = '', isLoading }) => {
  const child = !!isLoading ? (
    <div className='h-7 w-7 animate-spin rounded-full border-4 border-white border-t-transparent border-b-transparent' />
  ) : (
    children
  );

  return (
    <button
      type={type}
      className={classNames(
        'flex min-h-[56px] w-full items-center justify-center whitespace-nowrap rounded-xl bg-indigo p-4 font-semibold text-white hover:bg-indigo-600 focus:outline-none',
        !!isLoading ? 'pointer-events-none opacity-50' : '',
        className
      )}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Button;
