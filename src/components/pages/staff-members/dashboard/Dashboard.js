import React from 'react';
import styles from './dashboard.module.css';
import Button from '../../../base/button';

const Dashboard = ({ info }) => (
  <div className={styles.dashboard}>
    <div className={styles.inner}>
      <div className={styles.group}>
        <h1 className={styles.title}>
          Staff Members <span className={styles.info}>{info}</span>
        </h1>
        <div className={styles.buttons}>
        <Button value="Add Staff Members" />
        </div>
      </div>
      <div className={styles.filters}>
        Filters
      </div>
    </div>
  </div>
);

Dashboard.defaultProps = {
  info: 0,
}

export default Dashboard;
