import React from 'react';
import styles from './header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <div className={styles.sub}>
        <span className={styles.logo}>Boss</span>
      </div>
      <span className={styles.search}>Loupe</span>
      <span className={styles.profile}>User</span>
    </div>
  </header>
);

export default Header;
