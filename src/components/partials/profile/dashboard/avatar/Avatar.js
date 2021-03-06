import React from 'react';

const ProfileDashboardAvatar = () => (
  <div className="boss-user-summary__avatar">
    <div className="boss-user-summary__avatar-inner">
      <img src="http://boss-styles.herokuapp.com/images/avatars/user-info_pic.jpg" alt="Trulla Collier" className="boss-user-summary__pic" />
    </div>
    <button type="button" className="boss-user-summary__avatar-icon boss-user-summary__avatar-icon_role_edit">Edit</button>
  </div>
);

export default ProfileDashboardAvatar;
