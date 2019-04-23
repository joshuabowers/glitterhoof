import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { createLogger } from 'redux-logger';
import { loggers } from 'redux-act';

import { createStore, applyMiddleware, compose } from 'redux';
import cablecar from 'redux-cablecar';

import Glitterhoof from './glitterhoof'
import styles from './styles.css';
import rootReducer, { cablecarPrefix } from './reducers';
import sagaMiddleware, { rootSaga } from './sagas';
import history from './utils/history';

const logger = createLogger({
  ...loggers.reduxLogger
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(
  applyMiddleware( logger, sagaMiddleware, cablecar )
);

const store = createStore(
  rootReducer, middleware
);

sagaMiddleware.run( rootSaga );
// cablecar.connect( store, 'ChronicleChannel', { prefix: cablecarPrefix } );

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={ store }>
      <Router history={ history }>
        <Glitterhoof />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
});
