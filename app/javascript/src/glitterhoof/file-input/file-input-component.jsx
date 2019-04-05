import React from 'react';
import styles from './styles';

const FileInputComponent = ({ id, value, label, onChange, ...props }) => {
  const labelText = value ? value.split('\\').pop() : label;
  return (
    <>
      <input type='file' id={ id } name={ id }
             value={ value } onChange={ onChange }
             className={ styles.fileInput } />
      <label className={ styles.fileInputLabel } htmlFor={ id } >
        <span className='material-icons'>find_in_page</span>&nbsp;
        { labelText }
      </label>
    </>
  );
}

export default FileInputComponent;
