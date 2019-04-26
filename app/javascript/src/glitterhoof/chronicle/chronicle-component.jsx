import React from 'react';

import Event from './event';
import styles from './styles';

const groupedEventList = groups => Object.entries( groups ).map(
  ([ year, events ]) => (
    <section key={ year } id={ `year:${ year }` }>
      <header><h3>{ year }</h3></header>
      {
        events.map(
          event => <Event key={ event.id } { ...event } />
        )
      }
    </section>
  )
);

const ChronicleComponent = ({ dynasty, groups, ...props }) => (
  <main className={ styles.chronicle }>
    <article className={ styles.events }>
      <header><h2>{ dynasty }</h2></header>
      { groupedEventList( groups ) }
    </article>
  </main>
);

export default ChronicleComponent;
