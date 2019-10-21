import React from 'react';
import styles from './input-group.module.css';

const InputGroup = ({children}) => <div className={styles.group}>{children}</div>;

export default InputGroup;
