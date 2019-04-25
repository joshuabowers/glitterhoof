import React from 'react';

import Event from './event';
import styles from './styles';

const ChronicleComponent = ({ dynasty, groups, ...props }) => {
  const groupedEventList = Object.entries( groups ).map(
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

  return (
    <main className={ styles.chronicle }>
      <header><h2>{ dynasty }</h2></header>
      { groupedEventList }
    </main>
  );
}

export default ChronicleComponent;
