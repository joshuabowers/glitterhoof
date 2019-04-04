import React from 'react';
import styles from './styles';
import horseIcon from './horse-standing-on-three-paws-black-shape-of-side-view.svg';

const SiteHeaderComponent = (props) => (
  <header className={ styles.siteHeader }>
    <img src={ horseIcon } />
    <h1>Glitterhoof</h1>
  </header>
);

export default SiteHeaderComponent;
