import React from 'react';
import PropTypes from 'prop-types';
import ProfileDashboardSummary from './summary';
import ProfileDashboardSwitches from './switches';

const ProfileDashboard = ({
  name,
  avatarUrl,
  email,
  phone,
  venue,
  staffType,
}) => (
  <div className="boss-page-dashboard boss-page-dashboard_updated boss-page-dashboard_page_profile">
    <div className="boss-page-dashboard__group">
      <div className="boss-page-dashboard__user-summary">
        <ProfileDashboardSummary
          name={name}
          email={email}
          phone={phone}
          venue={venue}
          staffType={staffType}
          avatarUrl={avatarUrl}
        />
      </div>
      <div className="boss-page-dashboard__buttons-group">
        <a href="#" className="boss-button boss-button_role_edit boss-page-dashboard__button">Edit Profile</a>
        <a href="#" className="boss-button boss-button_role_block boss-page-dashboard__button">Disable Staff Member</a>
      </div>
    </div>

    <ProfileDashboardSwitches />
  </div>
);

ProfileDashboard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  staffType: PropTypes.string.isRequired,
  accessories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired,
  ),
  avatarUrl: PropTypes.string,
};

ProfileDashboardSummary.defaultProps = {
  accessories: [],
  avatarUrl: null,
};


export default ProfileDashboard;
