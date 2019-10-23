import React from 'react';
import Accessories from '../../accessories';
import ProfileDashboardAvatar from '../avatar';

const accessories = [
  {
    id: '1',
    title: 'Accessory name',
    name: 'Venue name',
    icon: 'accessory',
    quantity: 0,
    color: '#4c4c4c',
  },
  {
    id: '2',
    title: '3 pocket Aprons',
    name: 'Venue name',
    icon: 'apron',
    quantity: 0,
    color: '#cd84f1',
  },
  {
    id: '3',
    title: 'Bar Blade',
    name: 'Venue name',
    icon: 'bar-blade',
    quantity: 2,
    color: '#2ecc71',
  },
  {
    id: '4',
    title: 'Chef Hat',
    name: 'Venue name',
    icon: 'apron',
    quantity: 0,
    color: '#fea47f',
  },
  {
    id: '5',
    title: 'Chef Whites (Coats)',
    name: 'Venue name',
    icon: 'apron',
    quantity: 0,
    color: '#6a89cc',
  },
];

const ProfileDashboardSummary = () => (
  <div className="boss-user-summary">
    <div className="boss-user-summary__side">
      <ProfileDashboardAvatar />
    </div>
    <div className="boss-user-summary__content">
      <div className="boss-user-summary__header">
        <h2 className="boss-user-summary__name">Trulla Collier</h2>
        <span
          className="boss-button boss-button_type_small boss-button_type_no-behavior boss-user-summary__label"
          style={{ backgroundColor: '#f0af84' }}
        >
        Floor Staff
        </span>
      </div>
      <div className="boss-user-summary__indicators">
        <Accessories accessories={accessories} />
      </div>
      <ul className="boss-user-summary__review-list">
        <li className="boss-user-summary__review-item boss-user-summary__review-item_role_venue">
          <span className="boss-user-summary__review-marked">Some Venue Name</span>
        </li>
      </ul>
      <div className="boss-user-summary__contacts">
        <a
          href="mailto:trulla.collier@yahoo.com"
          className="boss-user-summary__link boss-user-summary__link_role_email boss-user-summary__link_adjust_wrap"
        >
        trulla.collier@yahoo.com
        </a>
        <a href="tel:123342342" className="boss-user-summary__link boss-user-summary__link_role_phone">+123 342 342</a>
      </div>
    </div>
  </div>
);

export default ProfileDashboardSummary;
