import React from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';
import classNames from 'utils/classNames';

const Input = props => {
  const {
    control,
    name,
    type = 'text',
    error = '',
    children,
    icon,
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  });

  return (
    <>
      <div
        className={classNames(
          'flex w-full items-center overflow-hidden rounded-lg border border-gray-400 text-gray-700 transition-all placeholder:text-gray-400 focus-within:border-indigo focus-within:text-indigo dark:text-white',
          error.length > 0 && 'border-red'
        )}
      >
        <input
          {...field}
          type={type}
          id={name}
          className='w-full border-0 bg-transparent px-5 py-4 text-sm font-medium focus:outline-none focus:ring-0'
          {...rest}
        />
        {icon && (
          <div className='flex items-center justify-center px-4'>{icon}</div>
        )}
      </div>
      {error.length > 0 && (
        <span className='text-sm font-medium text-red'>{error}</span>
      )}
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  control: PropTypes.any.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.node,
};

export default Input;
