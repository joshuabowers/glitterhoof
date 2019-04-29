import React from 'react';

import Event from './event';
import styles from './styles';

const groupedEventList = groups => Object.entries( groups ).map(
  ([ year, events ]) => (
    <React.Fragment key={ year }>
      <header><h3>{ year }</h3></header>
      {
        events.map(
          event => <Event key={ event.id } { ...event } />
        )
      }
    </React.Fragment>
  )
);

const ChronicleComponent = ({ dynasty, groups, ...props }) => (
  <main className={ styles.chronicle }>
    <header><h2>{ dynasty }</h2></header>
    { groupedEventList( groups ) }
  </main>
);

export default ChronicleComponent;
