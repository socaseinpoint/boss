import React from 'react';
import ProfileDescriptionDetails from './details';

const ProfileDescription = ({ description }) => (
  <div className="boss-page-main__flow">
    { description.map((details) => (
      <div className="boss-page-main__isle">
        <ProfileDescriptionDetails details={details} />
      </div>
    )) }
  </div>
);

export default ProfileDescription;
