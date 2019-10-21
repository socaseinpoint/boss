import React, { useState } from 'react';
import DashboardFilterForm from './form';

const Dropdown = () => {
  const [status] = useState(true);

  function renderForm() {
    return (
      status ? (
        <DashboardFilterForm />
      ) : (
        <div>No form</div>
      )
    );
  };

  return (
    <div className="boss-dropdown">
      <div className="boss-dropdown__header">
        <button type="button" className="boss-dropdown__switch boss-dropdown__switch_role_filter">Filter</button>
      </div>
      <div className="boss-dropdown__content boss-dropdown__content_state_opened">
        <div className="boss-dropdown__content-inner">
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
