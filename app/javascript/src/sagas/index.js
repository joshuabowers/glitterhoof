import createSagaMiddleware from 'redux-saga';
import { put, all } from 'redux-saga/effects';

import { createChronicle, analyzeChronicle } from './create-chronicle';
import { hydrate, hydrateChronicle } from './hydrate-chronicle';

export function* helloSaga() {
  console.log( 'Running rootSaga!' );
}

export function* rootSaga() {
  yield all([
    helloSaga(),
    createChronicle(),
    analyzeChronicle(),
    hydrate(),
    hydrateChronicle()
  ]);
}

const sagaMiddleware = createSagaMiddleware();

export default sagaMiddleware;
