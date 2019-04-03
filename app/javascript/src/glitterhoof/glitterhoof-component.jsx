import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Welcome from './welcome';
import Chronicles from './chronicles';
import Chronicle from './chronicle';
import About from './about';

const GlitterhoofComponent = () => (
  <>
    <Router>
      <>
        <Route exact path='/' component={ Welcome } />
        <Route path='/chronicles' component={ Chronicles } />
        <Route path='/chronicles/:id' component={ Chronicle } />
      </>
    </Router>
    <About />
  </>
);

export default GlitterhoofComponent;
