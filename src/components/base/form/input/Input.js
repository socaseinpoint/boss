import React from 'react';
import styles from './input.module.css'

const Input = ({input, name}) => <input className={styles.input} name={name} {...input} />

export default Input;
