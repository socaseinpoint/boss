import React, { useState } from 'react';
import DashboardFilterForm from './form';
import styles from './dashboard-filter.module.css';

const DashboardFilter = () => {
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
    <div>
      <div>
        Toggle Form
      </div>
      <div className={styles.content}>
        {renderForm()}
      </div>
    </div>
  );
};

export default DashboardFilter;
