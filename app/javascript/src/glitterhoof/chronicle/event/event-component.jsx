import React from 'react';
import styles from './styles';

const keyize = path => path.match(/\.\/([^.]+)\.\w+/)[1] || path;
const context = require.context('./categories', false, /\.svg$/);
const categories = context.keys().reduce(
  (a, key) => ({ ...a, [keyize(key)]: context(key) }),
  {}
);

const EventComponent = ({ id, category, text, year, ...props }) => (
  <p id={ id } className={ styles.event }>
    { category !== null && <img src={ categories[category] } alt={ category } /> }
    <span className={ styles.dropcap }>
      { text.slice( 0, 1 ) }
    </span>
    <span className={ styles.text }>
      { text.slice( 1 ) }
    </span>
  </p>
);

export default EventComponent;
