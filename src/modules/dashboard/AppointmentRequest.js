import { IconButton } from 'components';
import React from 'react';
import { HiChevronRight, HiCheck, HiX } from 'react-icons/hi';
import classNames from 'utils/classNames';

const appointmentRequest = [
  {
    name: 'Savannah Nguyen',
    image:
      'https://images.unsplash.com/photo-1659765464590-783684cb77d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    info: '45 Male',
    time: '9:30, 12 April, 2022',
    status: 'Declined',
  },
  {
    name: 'Jacob Jones',
    image:
      'https://images.unsplash.com/photo-1659765464590-783684cb77d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    info: '45 Male',
    time: '9:30, 12 April, 2022',
    status: 'Confirmed',
  },
  {
    name: 'Cody Fisher',
    image:
      'https://images.unsplash.com/photo-1659765464590-783684cb77d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    info: '45 Male',
    time: '9:30, 12 April, 2022',
    status: 'Pending',
  },
];

const AppointmentRequest = () => {
  return (
    <div className='flex flex-col gap-y-6 rounded-xl bg-white p-6 shadow-sm lg:w-2/3'>
      <div className='flex items-center justify-between'>
        <h2 className='text-xl font-semibold leading-loose text-gray-700'>
          Appointment Request
        </h2>
        <button className='flex items-center gap-x-2 text-indigo'>
          <span className='text-sm font-medium'>View All</span>
          <HiChevronRight />
        </button>
      </div>
      <hr className='border-gray-200' />
      <div className='flex flex-col gap-y-6'>
        {appointmentRequest.map(item => (
          <div
            className='flex items-center justify-between gap-x-4'
            key={item.name}
          >
            <div className='flex items-center gap-x-3'>
              <img
                className='h-14 w-14 rounded-full object-cover'
                src={item.image}
                alt=''
              />
              <div className='flex flex-col gap-y-0.5'>
                <div className='font-semibold text-gray-600'>{item.name}</div>
                <p className='text-sm text-gray-500'>
                  {item.info} - {item.time}
                </p>
                <p className='text-sm text-gray-500'></p>
              </div>
            </div>
            <div className='flex gap-x-3'>
              {item.status !== 'Pending' ? (
                <span
                  className={classNames(
                    'rounded-md py-1.5 px-3 text-xs font-medium',
                    item.status === 'Declined'
                      ? 'bg-red-100 text-red'
                      : 'bg-blue-100 text-blue'
                  )}
                >
                  {item.status}
                </span>
              ) : (
                <>
                  <IconButton className='border-indigo text-indigo'>
                    <HiCheck />
                  </IconButton>
                  <IconButton className='border-red text-red'>
                    <HiX />
                  </IconButton>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentRequest;
