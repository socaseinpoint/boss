import React from 'react';
import { useSelector } from 'react-redux';
import ProfileDescription from '../../../partials/profile/description';
import { getProfileDetails } from '../../../../selectors/staff-member-profile/getProfileDetails';

const Profile = () => {
  const description = useSelector((state) => getProfileDetails(state));

  return (<ProfileDescription description={description} />);
};

export default Profile;
