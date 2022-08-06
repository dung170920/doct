import { Dropdown, Logo } from 'components';
import React, { useState } from 'react';
import { HiChevronDown, HiOutlineBell, HiSun, HiMoon } from 'react-icons/hi';

const Topbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className='flex h-20 items-center justify-end gap-x-6 border-b border-gray-200 bg-white px-8'>
      <button className='flex items-center justify-center rounded-xl bg-gray-100 p-2'>
        {darkMode ? (
          <HiMoon className='h-6 w-6 text-gray-400' />
        ) : (
          <HiSun className='h-6 w-6 text-gray-400' />
        )}
      </button>
      <button className='flex items-center justify-center rounded-xl bg-gray-100 p-2'>
        <HiOutlineBell className='h-6 w-6 text-gray-400' />
      </button>
      <Dropdown
        items={[
          { name: 'My Profile', link: '/auth/sign-in' },
          { name: 'Logout', link: '/auth/sign-in' },
        ]}
      >
        <img
          src='https://images.unsplash.com/photo-1659765464590-783684cb77d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
          alt=''
          className='h-8 w-8 rounded-full object-cover'
        />
        <div className='flex flex-col'>
          <span className='text-sm font-semibold leading-6'>
            Stephen Conley
          </span>
          <div className='text-xs text-gray-600'>Cardiologist</div>
        </div>
      </Dropdown>
    </header>
  );
};

export default Topbar;
