import React from 'react';
import Header from '../../partials/header';
import styles from './default-layout.module.css';

const DefaultLayout = ({children}) => (
  <div>
    <Header />
    <div className={styles.inner}>
      {children}
    </div>
  </div>
);

export default DefaultLayout;
