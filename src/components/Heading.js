import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ title, subtitle }) => {
  return (
    <div className=''>
      <h1 className='text-2xl font-bold leading-relaxed text-gray-800'>
        {title}
      </h1>
      {subtitle && (
        <p className='text-sm font-medium text-gray-500'>{subtitle}</p>
      )}
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Heading;
