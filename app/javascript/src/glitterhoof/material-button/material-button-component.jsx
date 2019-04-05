import React from 'react';
import styles from './styles';

const MaterialButtonComponent = ({ icon, label, ...props }) => (
  <button className={ styles.materialButton } { ...props }>
    <span className='material-icons'>{ icon }</span>
    { label && <>&nbsp;{ label }</> }
  </button>
);

export default MaterialButtonComponent;
