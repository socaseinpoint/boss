import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import ProfileDashboardSummary from './summary';
import ProfileDashboardSwitches from './switches';

const ProfileDashboard = ({
  name,
  avatarUrl,
  email,
  phone,
  venue,
  staffType,
  accessories,
}) => {
  const { id } = useParams();

  return (
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
            accessories={accessories}
          />
        </div>
        <div className="boss-page-dashboard__buttons-group">
          <Link to={`/staff-member-profile/${id}/edit`} className="boss-button boss-button_role_edit boss-page-dashboard__button">Edit Profile</Link>
          <button type="button" className="boss-button boss-button_role_block boss-page-dashboard__button">Disable Staff Member</button>
        </div>
      </div>
      <ProfileDashboardSwitches />
    </div>
  );
};

ProfileDashboard.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  venue: PropTypes.string,
  staffType: PropTypes.string,
  accessories: PropTypes.arrayOf(
    PropTypes.any,
  ),
  avatarUrl: PropTypes.string,
};

ProfileDashboard.defaultProps = {
  name: '',
  email: '',
  phone: '',
  venue: '',
  staffType: '',
  accessories: [],
  avatarUrl: '',
};


export default ProfileDashboard;
