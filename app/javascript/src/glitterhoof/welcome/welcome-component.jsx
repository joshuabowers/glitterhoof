import React from 'react';

import FileInput from '../file-input';
import MaterialButton from '../material-button';

import styles from './styles';

const WelcomeComponent = ({ chronicleFile, fileChanged,
                            dispatchSquires, ...props }) => {
  const classes = [
    'material-icons',
    styles.createFlowIndicator,
    chronicleFile === '' ? styles.mustSelectFile : styles.readyToDispatch
  ].join(' ');
  return (
    <main>
      <p>
        Ever finish an epic hundred-hour long campaign of Crusader Kings 2 and
        want a record of the trials and travails of your dynasty? You ask the
        game to export a copy of your family chronicle only to find it's a boring
        text file. What if you could make it a bit more fancy, and also get some
        stat crunching on the events that shaped your clan and history itself?
        Enter Glitterhoof: the app for giving that dusty old chronicle some much
        needed pizazz.
      </p>
      <p>
        Want to get started? If you have the Charlemagne DLC, export a chronicle
        file from CK2, then upload it to us via the following form; we'll
        process it and make it look nice.
      </p>
      <form className={ styles.uploadChronicle }>
        <FileInput id='chronicleFile' label='Select chronicle file'
                   value={ chronicleFile } onChange={ fileChanged } />
        <span className={ classes }>arrow_back</span>
        <MaterialButton icon='send' label='Dispatch squires'
                        disabled={ chronicleFile.length === 0 }
                        onClick={ dispatchSquires } />
      </form>
    </main>
  );
};

export default WelcomeComponent;
