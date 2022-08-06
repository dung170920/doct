import { Button } from 'components';
import React from 'react';

const appointmentRequest = [
  {
    name: 'Savannah Nguyen',
    image:
      'https://images.unsplash.com/photo-1659765464590-783684cb77d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    info: '45 Male, 12 April 9:30',
    time: '10:25',
  },
  {
    name: 'Jacob Jones',
    image:
      'https://images.unsplash.com/photo-1659765464590-783684cb77d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    info: '45 Male, 12 April 9:30',
    time: '10:25',
  },
  {
    name: 'Cody Fisher',
    image:
      'https://images.unsplash.com/photo-1659765464590-783684cb77d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    info: '45 Male, 12 April 9:30',
    time: '10:25',
  },
];

const TodayAppointments = () => {
  return (
    <div className='flex flex-col gap-y-6 rounded-xl bg-white p-6 shadow-sm lg:w-1/3'>
      <h2 className='text-xl font-semibold leading-loose text-gray-700'>
        Today Appointments
      </h2>
      <hr className='border-gray-200' />
      <div className='flex flex-col gap-y-4'>
        {appointmentRequest.map(item => (
          <div className='flex items-center justify-between' key={item.name}>
            <div className='flex items-center gap-x-4'>
              <img
                className='h-12 w-12 rounded-full object-cover'
                src={item.image}
                alt=''
              />
              <div className='flex flex-col gap-y-0.5'>
                <div className='font-semibold text-gray-600'>{item.name}</div>
                <div className='text-sm text-gray-500'>{item.info}</div>
              </div>
            </div>
            <div className='flex gap-x-2'>
              <span className='text-xs font-medium text-gray-500'>
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Button type='button' className='w-full rounded-lg border py-3.5 text-sm'>
        View all
      </Button>
    </div>
  );
};

export default TodayAppointments;
