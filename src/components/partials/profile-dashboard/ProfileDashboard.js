import React from 'react';
import ProfileDashboardSummary from './summary';
import ProfileDashboardSwitches from './switches';

const ProfileDashboard = () => (
  <div className="boss-page-dashboard boss-page-dashboard_updated boss-page-dashboard_page_profile">
    <div className="boss-page-dashboard__group">
      <div className="boss-page-dashboard__user-summary">
        <ProfileDashboardSummary />
      </div>
      <div className="boss-page-dashboard__buttons-group">
        <a href="#" className="boss-button boss-button_role_edit boss-page-dashboard__button">Edit Profile</a>
        <a href="#" className="boss-button boss-button_role_block boss-page-dashboard__button">Disable Staff Member</a>
      </div>
    </div>

    <ProfileDashboardSwitches />
  </div>
);

export default ProfileDashboard;
