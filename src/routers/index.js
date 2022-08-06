import { Loading } from 'components';
import { AuthLayout, DashboardLayout } from 'layout';
import React, { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

const Loader = Component => props => {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

const SignUpPage = Loader(lazy(() => import('pages/auth/SignUpPage')));
const SignInPage = Loader(lazy(() => import('pages/auth/SignInPage')));

const DashboardPage = Loader(
  lazy(() => import('pages/dashboard/DashboardPage'))
);

const Routers = () => {
  return useRoutes([
    {
      path: 'auth',
      element: <AuthLayout />,
      children: [
        {
          path: 'sign-in',
          element: <SignInPage />,
          index: true,
        },
        { path: 'sign-up', element: <SignUpPage /> },
        { path: '', element: <Navigate to='sign-in' replace /> },
      ],
    },
    {
      path: '',
      element: <DashboardLayout />,
      children: [
        {
          element: <DashboardPage />,
          index: true,
        },
      ],
    },
  ]);
};

export default Routers;
