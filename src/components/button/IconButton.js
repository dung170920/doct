import React from 'react';
import classNames from 'utils/classNames';
import PropTypes from 'prop-types';

const IconButton = ({ children, className = '' }) => {
  return (
    <button
      className={classNames(
        className,
        'flex items-center justify-center whitespace-nowrap rounded-md border-2 p-1 focus:outline-none'
      )}
    >
      {children}
    </button>
  );
};

IconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  // isLoading: PropTypes.bool,
};

export default IconButton;
