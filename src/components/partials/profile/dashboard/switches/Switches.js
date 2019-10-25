import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink, useParams } from 'react-router-dom';

const SwitchesLink = ({ to, label, htmlRole, }) => {
  const classList = classNames('boss-button', 'boss-button_type_small', 'boss-page-dashboard__switch', { [`boss-button_role_${htmlRole}`]: htmlRole });
  return (
    <NavLink to={to} className={classList} activeClassName="boss-button_state_active">
      {label}
    </NavLink>
  );
};

SwitchesLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const Switches = () => {
  const { id } = useParams();

  return (
    <div className="boss-page-dashboard__switches">
      <SwitchesLink to={`/staff-member-profile/${id}/profile`} label="Profile" htmlRole="profile" />
      <SwitchesLink to={`/staff-member-profile/${id}/holidays`} label="Holidays" htmlRole="holidays" />
      <SwitchesLink to={`/staff-member-profile/${id}/3`} label="Owed hours" htmlRole="timelog" />
      <SwitchesLink to={`/staff-member-profile/${id}/4`} label="Accessories" htmlRole="accessories" />
      <SwitchesLink to={`/staff-member-profile/${id}/5`} label="Shifts" htmlRole="shifts" />
      <SwitchesLink to={`/staff-member-profile/${id}/6`} label="Payments" htmlRole="payments" />
    </div>
  );
};

export default Switches;
