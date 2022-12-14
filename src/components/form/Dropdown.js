import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'utils/classNames';
import { Link } from 'react-router-dom';
import { HiChevronDown } from 'react-icons/hi';
import PropTypes from 'prop-types';

const Dropdown = ({ children, items, className = '' }) => {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button
          className={classNames(
            'flex items-center justify-center gap-x-2 rounded-xl border border-gray-200 py-2 px-4 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo focus:ring-offset-2 focus:ring-offset-gray-100',
            className
          )}
        >
          {children}
          <HiChevronDown className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            {items.map(item => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <Link
                    to={item.link}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  items: PropTypes.array.isRequired,
};

export default Dropdown;
