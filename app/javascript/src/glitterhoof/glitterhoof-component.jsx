import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SiteHeader from './site-header';
import Welcome from './welcome';
import Chronicles from './chronicles';
import Chronicle from './chronicle';
import Status from './status';
import About from './about';
import NotFound from './not-found';

import styles from './styles';

const GlitterhoofComponent = ({ isProcessingFile, ...props }) => (
  <>
    <SiteHeader />
    <Router>
      <Switch>
        {
          isProcessingFile &&
          <Route exact path='/status' component={ Status } />
        }
        <Route exact path='/chronicles' component={ Chronicles } />
        <Route exact path='/about' component={ About } />
        <Route path='/chronicles/:id' component={ Chronicle } />
        <Route exact path='/' component={ Welcome } />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  </>
);

export default GlitterhoofComponent;
