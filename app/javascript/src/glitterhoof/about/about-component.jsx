import React from 'react';
import styles from './styles';

const AboutComponent = (props) => (
  <footer className={ styles.about }>
    <p>An app by Joshua Bowers, &copy; 2019.</p>
    <nav>
      <p>Glitterhoof uses the following assets and resources:</p>
      <ul>
        <li><a href='https://github.com/qrohlf/trianglify'>Trianglify</a></li>
        <li><a href='https://fonts.google.com/specimen/UnifrakturCook'>UnifrakturCook</a></li>
      </ul>
    </nav>
  </footer>
);

export default AboutComponent;
