import React from 'react';
import Trianglify from 'trianglify';
import styles from './styles';

const generateSvg = (props) => ({
  __html: Trianglify( props ).svg().innerHTML
});

const TrianglifyComponent = (props) => (
  <svg dangerouslySetInnerHTML={ generateSvg( props ) }
       className={ styles.trianglify } />
);

export default TrianglifyComponent;
