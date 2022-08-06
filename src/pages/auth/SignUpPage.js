import { Button, Checkbox, FormGroup, Input, Label } from 'components';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import useToggleValue from 'hooks/useToggleValue';

const schema = yup
  .object()
  .shape({
    name: yup.string().required('This field is required'),
    email: yup.string().required('This field is required').email(),
    password: yup
      .string()
      .required('This field is required')
      .min(8, 'Password must be more than 8 character'),
  })
  .required();

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  });
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label htmlFor='name'>Full Name</Label>
        <Input
          error={errors.name?.message}
          placeholder='Enter your full name'
          name='name'
          control={control}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor='email'>Email address</Label>
        <Input
          placeholder='Enter your email'
          name='email'
          control={control}
          error={errors.email?.message}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor='password'>Password</Label>
        <Input
          error={errors.password?.message}
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
      <FormGroup>
        <Checkbox name='term'>
          <p className='flex-1 text-xs text-gray-600 lg:text-sm'>
            I agree to the
            <span className='text-indigo'> Terms of Use</span> and have read and
            understand the
            <span className='text-indigo'> Privacy policy.</span>
          </p>
        </Checkbox>
      </FormGroup>
      <div className='pt-6'>
        <Button type='submit' isLoading={isSubmitting}>
          Create Account
        </Button>
      </div>
    </form>
  );
};

export default SignUpPage;
