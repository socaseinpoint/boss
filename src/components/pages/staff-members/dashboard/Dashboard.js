import React from 'react';
import { useSelector } from 'react-redux';
import { getStaffMembersTotal } from '../../../../selectors/staffMembers';
import styles from './dashboard.module.css';
import Button from '../../../base/button';
import Dropdown from '../../../partials/dropdown';

const Dashboard = () => {
  const total = useSelector((state) => getStaffMembersTotal(state));

  return (
    <div className={styles.dashboard}>
      <div className={styles.inner}>
        <div className={styles.group}>
          <h1 className={styles.title}>
            Staff Members
            <span className={styles.info}>{total}</span>
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
};

export default Dashboard;
