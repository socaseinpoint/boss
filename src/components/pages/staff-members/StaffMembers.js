import React, { useState } from 'react';
import DefaultLayout from '../../layouts/default';
import Dashboard from './dashboard';
import Content from './content';
import { initialStaffMembers } from '../../../utils/initialState';

const StaffMembers = () => {
  const [members] = useState(initialStaffMembers);

  return (
    <DefaultLayout>
      <Dashboard />
      <Content members={members} />
    </DefaultLayout>
  );
};

export default StaffMembers;
