import React from 'react';
import PropTypes from 'prop-types';
import Accessories from '../../../accessories';
import ProfileDashboardAvatar from '../avatar';

const ProfileDashboardSummary = ({
  name,
  email,
  phone,
  venue,
  staffType,
  accessories,
  avatarUrl,
}) => (
  <div className="boss-user-summary">
    <div className="boss-user-summary__side">
      <ProfileDashboardAvatar avatarUrl={avatarUrl} />
    </div>
    <div className="boss-user-summary__content">
      <div className="boss-user-summary__header">
        <h2 className="boss-user-summary__name">
          {name}
        </h2>
        <span
          className="boss-button boss-button_type_small boss-button_type_no-behavior boss-user-summary__label"
          style={{ backgroundColor: '#f0af84' }}
        >
          {staffType}
        </span>
      </div>
      <div className="boss-user-summary__indicators">
        <Accessories accessories={accessories} />
      </div>
      <ul className="boss-user-summary__review-list">
        <li className="boss-user-summary__review-item boss-user-summary__review-item_role_venue">
          <span className="boss-user-summary__review-marked">{venue}</span>
        </li>
      </ul>
      <div className="boss-user-summary__contacts">
        <a
          href="mailto:trulla.collier@yahoo.com"
          className="boss-user-summary__link boss-user-summary__link_role_email boss-user-summary__link_adjust_wrap"
        >
          {email}
        </a>
        <a href={`tel:${phone}`} className="boss-user-summary__link boss-user-summary__link_role_phone">{phone}</a>
      </div>
    </div>
  </div>
);

ProfileDashboardSummary.propTypes = {
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

export default ProfileDashboardSummary;
