import React, { useState } from 'react';
import DashboardFilterForm from './form';
import styles from './dropdown.module.css';

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

export default Dropdown;
