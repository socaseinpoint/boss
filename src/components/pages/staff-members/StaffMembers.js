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
      name: '',
      email: '',
      status: '',
      venue: '',
      staffType: '',
    },
    pagination: {
      current: 10,
      perPage: 4,
      total: 120,
    },
    results: initialStaffMembers,
  });

  return (
    <DefaultLayout>
      <Dashboard filters={members.filters} />
      <Content members={members} />
    </DefaultLayout>
  );
};

export default StaffMembers;
