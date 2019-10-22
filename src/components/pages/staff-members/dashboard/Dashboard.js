import React from 'react';
import { useSelector } from 'react-redux';
import Dashboard from '../../../partials/dashboard';
import StaffFilters from '../../../partials/staff/filters';
import { getStaffMembersTotal } from '../../../../selectors/staffMembers';
import Dropdown from '../../../partials/dropdown';

const StaffMembersDashboard = () => {
  const total = useSelector((state) => getStaffMembersTotal(state));

  return (
    <Dashboard>
      <div className="boss-page-dashboard boss-page-dashboard_updated boss-page-dashboard_page_staff-members-index">
        <div className="boss-page-dashboard__group">
          <h1 className="boss-page-dashboard__title">
            <span className="boss-page-dashboard__title-text">
              Staff Members
            </span>
            <span className="boss-page-dashboard__title-info">
              {`+${total}`}
            </span>
          </h1>
          <div className="boss-page-dashboard__buttons-group">
            <a href="/add" className="boss-button boss-button_role_add boss-page-dashboard__button">
              Add Staff Members
            </a>
          </div>
        </div>
        <div className="boss-page-dashboard__filter">
          <Dropdown
            trigger={<button type="button" className="boss-dropdown__switch boss-dropdown__switch_role_filter">Filter</button>}
            content={<StaffFilters />}
          />
        </div>
      </div>
    </Dashboard>
  );
};

export default StaffMembersDashboard;
