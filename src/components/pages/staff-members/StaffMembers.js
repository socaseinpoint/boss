import React from 'react';
import DefaultLayout from '../../layouts/default';
import Dashboard from './dashboard';
import Content from './content';

const StaffMembers = () => (
  <DefaultLayout>
    <Dashboard />
    <Content />
  </DefaultLayout>
);

export default StaffMembers;
