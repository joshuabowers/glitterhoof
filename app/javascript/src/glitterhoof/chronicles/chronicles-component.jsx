import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';

const Chronicle = ({ id, dynasty, startedIn, endedIn, loadChronicle }) => (
  <Link className={ styles.chronicle } onClick={ loadChronicle } 
        to={ `/chronicles/${ id }` } id={ id }>
    <header><h2>{ dynasty }</h2></header>
    <span>
      { startedIn }&mdash;{ endedIn }
    </span>
  </Link>
);

const chronicleList = (chronicles, loadChronicle) => (
  chronicles.map(
    chronicle => <Chronicle key={ chronicle.id } loadChronicle={ loadChronicle }
                            { ...chronicle } />
  )
)

const ChroniclesComponent = ({ chronicles, loadChronicle }) => (
  <main className={ styles.chronicles }>
    {
      chronicleList( chronicles, loadChronicle )
    }
  </main>
);

export default ChroniclesComponent;
