import React from 'react';
import { Redirect } from 'react-router-dom';
import styles from './styles';

const StatusComponent = ({ step, progress, ...props }) => (
  <main className={ styles.status }>
    <label htmlFor='progress'>Currently: { step }</label>
    <progress max='1' value={ progress }>{ progress * 100 } %</progress>
  </main>
);

export default StatusComponent;
