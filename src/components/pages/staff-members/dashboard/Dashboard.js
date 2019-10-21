import React from 'react';
import { useSelector } from 'react-redux';
import { getStaffMembersTotal } from '../../../../selectors/staffMembers';
import Button from '../../../base/button';
import Dropdown from '../../../partials/dropdown';

const Dashboard = () => {
  const total = useSelector((state) => getStaffMembersTotal(state));

  return (
    <div className="boss-page-dashboard boss-page-dashboard_updated boss-page-dashboard_page_staff-members-index">
      <div className="boss-page-dashboard__group">
        <h1 className="boss-page-dashboard__title">
          <span clasName="boss-page-dashboard__title-text">
            Staff Members
          </span>
          <span className="boss-page-dashboard__title-info">
            {`+${total}`}
          </span>
        </h1>
        <div className="boss-page-dashboard__buttons-group">
          <a href="#" className="boss-button boss-button_role_add boss-page-dashboard__button">
            Add Staff Members
          </a>
        </div>
      </div>
      <div className="boss-page-dashboard__filter">
        <Dropdown />
      </div>
    </div>
  );
};

export default Dashboard;
