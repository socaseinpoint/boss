import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useParams } from 'react-router-dom';

const SwitchesLink = ({ to, label }) => (
  <NavLink to={to} className="boss-button boss-button_type_small boss-button_role_profile boss-page-dashboard__switch" activeClassName="boss-button_state_active">
    {label}
  </NavLink>
);

SwitchesLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const Switches = () => {
  const { id } = useParams();

  return (
    <div className="boss-page-dashboard__switches">
      <SwitchesLink to={`/staff-member-profile/${id}/profile`} label="Profile" />
      <SwitchesLink to={`/staff-member-profile/${id}/holidays`} label="Holidays" />
      <SwitchesLink to={`/staff-member-profile/${id}/3`} label="Owed hours" />
      <SwitchesLink to={`/staff-member-profile/${id}/4`} label="Accessories" />
      <SwitchesLink to={`/staff-member-profile/${id}/5`} label="Shifts" />
      <SwitchesLink to={`/staff-member-profile/${id}/6`} label="Payments" />
    </div>
  );
};

export default Switches;
