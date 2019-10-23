import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SwitchesLink = ({ to, label }) => (
  <NavLink to={to} className="boss-button boss-button_type_small boss-button_role_profile boss-page-dashboard__switch" activeClassName="boss-button_state_active">
    {label}
  </NavLink>
);

SwitchesLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const Switches = () => (
  <div className="boss-page-dashboard__switches">
    <SwitchesLink to="/staff-member-profile/profile" label="Profile" />
    <SwitchesLink to="/staff-member-profile/holidays" label="Holidays" />
    <SwitchesLink to="/staff-member-profile/owed-hours" label="Owed hours" />
    <SwitchesLink to="/staff-member-profile/accessories" label="Accessories" />
    <SwitchesLink to="/staff-member-profile/shifts" label="Shifts" />
    <SwitchesLink to="/staff-member-profile/payments" label="Payments" />
  </div>
);

export default Switches;
