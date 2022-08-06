import { Logo } from 'components';
import React, { useState } from 'react';
import {
  HiUser,
  HiViewGridAdd,
  HiClock,
  HiCalendar,
  HiCog,
  HiLogout,
} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import classNames from 'utils/classNames';

const sidebar = [
  [
    { name: 'Dashboard', icon: HiViewGridAdd, link: '/' },
    { name: 'Appointment', icon: HiClock, link: '/' },
    { name: 'Patient', icon: HiUser, link: '/' },
    { name: 'Schedule Timings', icon: HiCalendar, link: '/' },
  ],
  [
    { name: 'Settings', icon: HiCog, link: '/' },
    { name: 'Logout', icon: HiLogout, link: '/' },
  ],
];

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  return (
    <aside className='w-64 border-r border-gray-200 bg-white py-6 px-10'>
      <Logo />
      {sidebar.map((items, index) => (
        <ul className='flex flex-col gap-y-6 pt-20' key={index}>
          {items.map(item => (
            <li key={item.name}>
              <Link
                to={item.link}
                className={classNames(
                  'group flex items-start gap-x-4 whitespace-nowrap py-2 hover:font-semibold hover:text-indigo',
                  activeMenu === item.name
                    ? 'font-semibold text-indigo'
                    : 'font-medium text-gray-500'
                )}
              >
                <span
                  className={classNames(
                    'absolute left-0 h-8 w-1.5 rounded-r-full bg-indigo transition-transform ease-in-out group-hover:translate-x-0 group-hover:scale-y-100',
                    activeMenu === item.name
                      ? 'translate-x-0 scale-y-100'
                      : '-translate-x-full scale-y-0'
                  )}
                />
                <item.icon className='h-6 w-6 fill-current' />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </aside>
  );
};

export default Sidebar;
