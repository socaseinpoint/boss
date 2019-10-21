import React, { useState } from 'react';
import DefaultLayout from '../../layouts/default';
import Dashboard from './dashboard';
import Content from './content';
import { initialStaffMembers } from '../../../utils/initialState';

const StaffMembers = () => {
  const [members] = useState({
    loading: false,
    errors: null,
    filters: {
      name: null,
      email: null,
      status: null,
      venue: null,
      staffType: null,
    },
    perPage: 4,
    currentPage: 0,
    data: initialStaffMembers,
  });

  return (
    <DefaultLayout>
      <Dashboard />
      <Content members={members.data} />
    </DefaultLayout>
  );
};

export default StaffMembers;
