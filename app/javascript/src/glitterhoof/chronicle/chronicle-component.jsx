import React from 'react';

import Event from './event';
import styles from './styles';

const ChronicleComponent = ({ dynasty, events = [], ...props }) => {
  const eventList = events && events.map( event => <Event key={ event.id } { ...event } /> );

  return (
    <main className={ styles.chronicle }>
      <header><h2>{ dynasty }</h2></header>
      { eventList }
    </main>
  );
}

export default ChronicleComponent;
