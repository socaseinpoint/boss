import React from 'react';
import PropTypes from 'prop-types';
import styles from './paginator.module.css';

const Pagination = ({
  current,
  total,
  handleAction,
  perPage,
}) => (
  <>
    <div className={styles.count}>
      Showing
      {perPage}
      of
      {total}
    </div>

    <div className={styles.last}>
      <span role="presentation" onClick={() => handleAction(current - 1)} className={styles.action}>Previous</span>
      <span role="presentation" onClick={() => handleAction(current)} className={styles.action}>{current}</span>
      <span role="presentation" onClick={() => handleAction(current + 1)} className={styles.action}>{current + 1}</span>
      <span role="presentation" onClick={() => handleAction(current + 2)} className={styles.action}>{current + 2}</span>
      <span role="presentation" onClick={() => handleAction(current + 3)} className={styles.action}>{current + 3}</span>
      <span role="presentation" onClick={() => handleAction(current + 4)} className={styles.action}>{current + 4}</span>
      <span role="presentation" className={styles.action}>...</span>
      <span role="presentation" onClick={() => handleAction(total)} className={styles.action}>{total}</span>
      <span role="presentation" onClick={() => handleAction(current + 1)} className={styles.action}>Next</span>
    </div>
  </>
);

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  handleAction: PropTypes.func.isRequired,
};

export default Pagination;
