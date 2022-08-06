import { Heading } from 'components';
import { AppointmentRequest, StatsCard, TodayAppointments } from 'modules';
import React from 'react';

const DashboardPage = () => {
  return (
    <div className='flex flex-col py-7 px-10'>
      <Heading
        title='Welcome, Dr. Stephen'
        subtitle='Have a nice day at great work'
      />
      <StatsCard />
      <div className='flex gap-x-6 pt-6 pr-6'>
        <AppointmentRequest />
        <TodayAppointments />
      </div>
    </div>
  );
};

export default DashboardPage;
