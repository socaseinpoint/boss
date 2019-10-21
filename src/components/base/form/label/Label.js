import React from 'react';
import styles from './label.module.css';

const Label = ({children}) => <div className={styles.label}>{children}</div>;

export default Label;
