import createSagaMiddleware from 'redux-saga';
import { put, all } from 'redux-saga/effects';

import { createChronicle, analyzeChronicle } from './create-chronicle';
import { hydrate, hydrateChronicle, hydrateChronicles } from './hydrate-chronicle';

export function* helloSaga() {
  console.log( 'Running rootSaga!' );
}

export function* rootSaga() {
  yield all([
    helloSaga(),
    createChronicle(),
    analyzeChronicle(),
    hydrateChronicle(),
    hydrateChronicles(),
    hydrate()
  ]);
}

const sagaMiddleware = createSagaMiddleware();

export default sagaMiddleware;
