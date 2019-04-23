import React from 'react';
import { Redirect } from 'react-router-dom';
import styles from './styles';

const StatusComponent = ({ step, progress, ...props }) => (
  <main className={ styles.status }>
    <p>
      Your chronicle file is currently being uploaded; please do <em>not</em>&nbsp;
      navigate away from this page or close your browser tab or window! You
      will automatically be redirected to your chronicle after we have finished
      analyzing it.
    </p>
    <label htmlFor='progress'>Currently: { step }</label>
    <progress max='1' value={ progress }>{ progress * 100 } %</progress>
  </main>
);

export default StatusComponent;
