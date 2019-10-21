import React from 'react';
import styles from './paginator.module.css';

const Pagination = ({current, total, onChange, limit}) => {
  return (
    <>
      <div className={styles.count}>
        Showing 4 of 132
      </div>

      <div className={styles.last}>
        <span className={styles.action}>Previous</span>
        <span className={styles.action}>1</span>
        <span className={styles.action}>2</span>
        <span className={styles.action}>3</span>
        <span className={styles.action}>4</span>
        <span className={styles.action}>5</span>
        <span className={styles.action}>...</span>
        <span className={styles.action}>33</span>
        <span className={styles.action}>Next</span>
      </div>
    </>
  );
};

export default Pagination;
