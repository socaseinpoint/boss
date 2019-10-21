import React from 'react';
import PropTypes from 'prop-types';
import styles from './dashboard.module.css';
import Button from '../../../base/button';
import DashboardFilter from '../../../partials/dashboard-filter';

const Dashboard = ({ totalMembers, filters }) => (
  <div className={styles.dashboard}>
    <div className={styles.inner}>
      <div className={styles.group}>
        <h1 className={styles.title}>
          Staff Members
          <span className={styles.info}>{totalMembers}</span>
        </h1>
        <div className={styles.buttons}>
          <Button value="Add Staff Members" />
        </div>
      </div>
      <div className={styles.filters}>
        <DashboardFilter filters={filters} />
      </div>
    </div>
  </div>
);

Dashboard.propTypes = {
  totalMembers: PropTypes.number,
  filters: PropTypes.shape({
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    perPage: PropTypes.number,
  }).isRequired,
};

Dashboard.defaultProps = {
  totalMembers: 0,
};

export default Dashboard;
