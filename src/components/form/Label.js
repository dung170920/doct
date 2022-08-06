import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'utils/classNames';

const Label = ({ children, htmlFor = '', className = '' }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames(
        'cursor-pointer text-sm font-medium text-gray-600 dark:text-gray-400',
        className
      )}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};

export default Label;
