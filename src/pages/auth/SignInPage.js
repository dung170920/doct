import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { Button, Checkbox, FormGroup, Input, Label } from 'components';
import { useForm } from 'react-hook-form';
import useToggleValue from 'hooks/useToggleValue';
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineWarning,
} from 'react-icons/ai';

const SignInPage = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {},
  });
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <>
      <div className='flex flex-wrap items-center justify-between gap-x-6 gap-y-3 whitespace-nowrap pt-7'>
        <button className='flex flex-1 items-center justify-center whitespace-nowrap rounded-lg border border-gray-500 bg-white p-4 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-black'>
          <FcGoogle className='h-6 w-6' />
          <span className='pl-3 font-medium text-gray-700 dark:text-white'>
            Sign in with Google
          </span>
        </button>
        <button className='flex flex-1 items-center justify-center whitespace-nowrap rounded-lg bg-blue-600 p-4 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100'>
          <BsFacebook className='h-6 w-6 text-white' />
          <span className='pl-3 font-medium text-white'>
            Sign in with Facebook
          </span>
        </button>
      </div>
      <div className='flex items-center justify-between pt-6'>
        <hr className='w-full border-gray-400' />
        <span className='px-4 font-light tracking-wider text-gray-500'>or</span>
        <hr className='w-full border-gray-400' />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label htmlFor='email'>Email address</Label>
          <Input
            placeholder='Enter your email'
            name='email'
            control={control}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='password'>Password</Label>
          <Input
            type={`${showPassword ? 'text' : 'password'}`}
            placeholder='Enter your password'
            name='password'
            control={control}
            icon={
              !showPassword ? (
                <AiOutlineEye
                  className='h-6 w-6 cursor-pointer select-none text-gray-500'
                  onClick={handleTogglePassword}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className='h-6 w-6 cursor-pointer select-none text-gray-500'
                  onClick={handleTogglePassword}
                />
              )
            }
          />
        </FormGroup>
        <div className='flex items-center justify-between'>
          <Checkbox name='remember'>Remember me</Checkbox>
          <Link
            to='/#'
            className='font-medium text-indigo hover:text-indigo-600'
          >
            Forgot password?
          </Link>
        </div>
        {/* <div
          className='mt-5 rounded-b border-t-4 border-red bg-red-100 px-4 py-3 text-red shadow-sm'
          role='alert'
        >
          <div className='flex'>
            <div className='py-1'>
              <AiOutlineWarning className='mr-4 h-6 w-6 text-red' />
            </div>
            <p className='text-sm'>
              We couldn’t find an account matching the email or password you
              entered. Please try again.
            </p>
          </div>
        </div> */}
        <div className='pt-6'>
          <Button type='submit' isLoading={isSubmitting}>
            Sign In
          </Button>
        </div>
      </form>
    </>
  );
};

export default SignInPage;
