import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';

const Chronicle = ({ id, dynasty, startedIn, endedIn }) => (
  <Link className={ styles.chronicle }
        to={ `/chronicles/${ id }` } id={ id }>
    <header><h2>{ dynasty }</h2></header>
    <span>
      { startedIn }&mdash;{ endedIn }
    </span>
  </Link>
);

const chronicleList = (chronicles) => (
  chronicles.map(
    chronicle => <Chronicle key={ chronicle.id }
                            { ...chronicle } />
  )
)

const ChroniclesComponent = ({ chronicles }) => (
  <main className={ styles.chronicles }>
    {
      chronicleList( chronicles )
    }
  </main>
);

export default ChroniclesComponent;
