import React from 'react';
import { useSelector } from 'react-redux';
import { getProfileSummary } from '../../../../selectors/staffMembers';
import Dashboard from '../../../partials/dashboard';
import ProfileDashboard from '../../../partials/profile/dashboard';

const StaffMemberProfileDashboard = () => {
  const summary = useSelector((state) => getProfileSummary(state));
  const {
    id,
    name,
    avatarUrl,
    email,
    phone,
    venue,
    staffType,
  } = summary;

  return (
    <Dashboard>
      <ProfileDashboard
        id={id}
        name={name}
        avatarUrl={avatarUrl}
        email={email}
        phone={phone}
        venue={venue}
        staffType={staffType}
      />
    </Dashboard>
  );
};

export default StaffMemberProfileDashboard;
