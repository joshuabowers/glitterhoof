import React from 'react';
import styles from './styles';

const NotFoundComponent = (props) => (
  <main className={ styles.notFound }>
    <h2>404</h2>
    <p>
      Your most esteemed chancellor, Glitterhoof, regrets to inform you that
      the resource you attempted to access was not found within your demesne.
      Perhaps you need to fabricate a claim on one of your neighbors to&mdash;
      ahem&mdash;acquire part of their realm?
    </p>
  </main>
);

export default NotFoundComponent;
