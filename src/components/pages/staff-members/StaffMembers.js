import React from 'react';
import DefaultLayout from '../../layouts/default';
import StaffMembersDashboard from './dashboard';
import StaffMembersContent from './content';

const StaffMembers = () => (
  <DefaultLayout>
    <StaffMembersDashboard />
    <StaffMembersContent />
  </DefaultLayout>
);

export default StaffMembers;
