import { Sidebar, Topbar } from 'modules';
import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
      <Sidebar />
      <main className='flex flex-1 flex-col pb-8'>
        <Topbar />
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
