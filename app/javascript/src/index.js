import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { createLogger } from 'redux-logger';
import { loggers } from 'redux-act';

import { createStore, applyMiddleware, compose } from 'redux';

import Glitterhoof from './glitterhoof'
import styles from './styles.css';
import rootReducer from './reducers';
import sagaMiddleware, { rootSaga } from './sagas';

const logger = createLogger({
  ...loggers.reduxLogger
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(
  applyMiddleware( logger, sagaMiddleware )
);

const store = createStore(
  rootReducer, middleware
);

sagaMiddleware.run( rootSaga );

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={ store }>
      <Router>
        <Glitterhoof />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
});
