import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles';

const NavBarComponent = (props) => (
  <header className={ styles.navBar }>
    <nav>
      <ul>
        <li><NavLink to='/' exact activeClassName={ styles.active }>Home</NavLink></li>
        <li><NavLink to='/chronicles' activeClassName={ styles.active }>Chronicles</NavLink></li>
        <li><NavLink to='/about' activeClassName={ styles.active }>About</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default NavBarComponent;
