import { authBg } from 'assets/images';
import { Logo } from 'components';
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const AuthLayout = () => {
  const location = useLocation();
  return (
    <div className='flex min-h-screen justify-between bg-white dark:bg-black '>
      <div
        className='relative hidden w-1/2 bg-cover bg-center lg:block'
        style={{ backgroundImage: `url(${authBg})` }}
      ></div>
      <div className='mx-auto max-w-2xl flex-1'>
        <div className='flex flex-col px-8 pt-10 lg:px-14 xl:px-24'>
          <Logo />
          <div className='pt-10 pb-6 text-gray-600 dark:text-gray-400'>
            <h1 className='mb-1 whitespace-nowrap text-2xl font-bold text-black dark:text-white md:mb-2'>
              {location.pathname.includes('sign-in') ? 'Sign In' : 'Sign Up'}
            </h1>
            <span className=''>
              {location.pathname.includes('sign-in')
                ? 'Enter details to login your account'
                : 'Enter details to create your account'}
            </span>
            <div className='mt-5'>
              <Outlet />
            </div>
            <div className='mt-4'>
              <div className='text-center'>
                {location.pathname.includes('sign-in') ? (
                  <>
                    Don't have an account?{' '}
                    <Link
                      to='/auth/sign-up'
                      className='font-medium text-indigo hover:text-indigo-600'
                    >
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <Link
                      to='/auth/sign-in'
                      className='font-medium text-indigo hover:text-indigo-600'
                    >
                      Sign In
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
