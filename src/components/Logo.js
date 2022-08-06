import { LogoIcon } from 'assets/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/' className='flex items-center gap-x-2 self-center md:self-end'>
      <LogoIcon className='h-9 w-9 fill-current text-black dark:text-white' />
      <span className='text-3xl font-extrabold text-black dark:text-white'>
        Doct.
      </span>
    </Link>
  );
};

export default Logo;
