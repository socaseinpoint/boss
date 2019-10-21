import React from 'react';
import PropTypes from 'prop-types';
import styles from './dashboard.module.css';
import Button from '../../../base/button';
import Dropdown from '../../../partials/dropdown';

const Dashboard = ({ totalMembers }) => (
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
        <Dropdown />
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
