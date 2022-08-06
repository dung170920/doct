import React from 'react';
import {
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineVideoCamera,
  HiArrowDown,
  HiArrowUp,
  HiOutlineCash,
} from 'react-icons/hi';

const stats = [
  {
    title: 'Total Income',
    percentage: '+32.40%',
    value: '$10,243.00',
    status: 'up',
    icon: HiOutlineCash,
  },
  {
    title: 'Total Appointments',
    percentage: '+32.40%',
    value: '10,000',
    status: 'up',
    icon: HiOutlineCalendar,
  },
  {
    title: 'Total Patients',
    percentage: '-12.40%',
    value: '23,456',
    status: 'down',
    icon: HiOutlineUser,
  },
  {
    title: 'Video Consulting',
    percentage: '+2.40%',
    value: '1,234',
    status: 'up',
    icon: HiOutlineVideoCamera,
  },
];

const StatsCard = () => {
  return (
    <div className='flex gap-6 py-8'>
      {stats.map(stat => (
        <div
          className='flex w-1/4 flex-col gap-y-3 rounded-lg bg-white p-4 shadow-sm'
          key={stat.title}
        >
          <div className='flex items-center gap-x-3'>
            <div className='rounded-lg bg-gray-100 p-2'>
              <stat.icon className='h-5 w-5 text-gray-400' />
            </div>
            <span
              className={`text-xs font-medium ${
                stat.status === 'up' ? 'text-green-500' : 'text-red'
              }`}
            >
              {stat.percentage}
            </span>
            <div
              className={`rounded-full p-1 ${
                stat.status === 'up' ? 'bg-green-500/20' : 'bg-red/20'
              }`}
            >
              {stat.status === 'up' ? (
                <HiArrowUp className='h-3 w-3 fill-current text-green-500' />
              ) : (
                <HiArrowDown className='h-3 w-3 fill-current text-red' />
              )}
            </div>
          </div>
          <div className='text-3xl font-semibold text-gray-700'>
            {stat.value}
          </div>
          <div className='text-sm tracking-wide text-gray-500'>
            {stat.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
