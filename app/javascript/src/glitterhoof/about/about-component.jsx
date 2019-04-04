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
        <li>
          Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a>&nbsp;
          from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>&nbsp;
          is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
        </li>
      </ul>
    </nav>
  </footer>
);

export default AboutComponent;
