import React from 'react';
import styles from './styles';

const AboutComponent = (props) => (
  <main className={ styles.about }>
    <p>An app by Joshua Bowers, &copy; 2019.</p>
    <nav>
      <p>Glitterhoof uses the following assets and resources:</p>
      <ul>
        <li>Tessellations: <a href='https://github.com/qrohlf/trianglify'>Trianglify</a></li>
        <li>Font: <a href='https://fonts.google.com/specimen/UnifrakturCook'>UnifrakturCook</a></li>
        <li>Free Vector Art by <a href="https://www.vecteezy.com">www.Vecteezy.com</a></li>
        <li>Select icons used in forms from the <a href='https://material.io/'>Material Icons</a> set</li>
        <li>
          All other icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a>&nbsp;
          from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>&nbsp;
          is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
        </li>
      </ul>
    </nav>
  </main>
);

export default AboutComponent;
