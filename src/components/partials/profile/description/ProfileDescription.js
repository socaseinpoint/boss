import React from 'react';
import PropTypes from 'prop-types';
import ProfileDescriptionDetails from './details';

const ProfileDescription = ({ description }) => (
  <div className="boss-page-main__flow">
    { description.data.map((details) => (
      <div className="boss-page-main__isle" key={details.id}>
        <ProfileDescriptionDetails details={details} />
      </div>
    )) }
  </div>
);

ProfileDescription.propTypes = {
  description: PropTypes.arrayOf(
    PropTypes.any.isRequired,
  ).isRequired,
};

export default ProfileDescription;
