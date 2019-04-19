import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import SiteHeader from './site-header';
import Welcome from './welcome';
import Chronicles from './chronicles';
import Chronicle from './chronicle';
import Status from './status';
import About from './about';
import NotFound from './not-found';

import styles from './styles';

const GlitterhoofComponent = ({ location, ...props }) => (
  <>
    <SiteHeader />
    <TransitionGroup>
      <CSSTransition key={ location.key } timeout={ 300 }
                     classNames={{ ...styles }}>
        <Switch location={ location }>
          <Route exact path='/status' component={ Status } />
          <Route exact path='/chronicles' component={ Chronicles } />
          <Route exact path='/about' component={ About } />
          <Route path='/chronicles/:id' component={ Chronicle } />
          <Route exact path='/' component={ Welcome } />
          <Route component={ NotFound } />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </>
);

export default GlitterhoofComponent;
