import React from 'react';
import styles from './styles';

const EventComponent = ({ id, category, text, year, ...props }) => (
  <p id={ id } className={ styles.event }>
    { category !== null && <img src={ `./categories/${ category }.svg` } alt={ category } /> }
    { text }
  </p>
);

export default EventComponent;
