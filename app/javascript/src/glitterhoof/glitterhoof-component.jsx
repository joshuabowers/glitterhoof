import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SiteHeader from './site-header';
import Welcome from './welcome';
import Chronicles from './chronicles';
import Chronicle from './chronicle';
import About from './about';

import styles from './styles';

const GlitterhoofComponent = () => (
  <>
    <SiteHeader />
    <Router>
      <>
        <Route exact path='/' component={ Welcome } />
        <Route exact path='/chronicles' component={ Chronicles } />
        <Route path='/chronicles/:id' component={ Chronicle } />
      </>
    </Router>
    <About />
  </>
);

export default GlitterhoofComponent;
