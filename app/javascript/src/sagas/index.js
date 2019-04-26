import createSagaMiddleware from 'redux-saga';
import { put, all } from 'redux-saga/effects';

import { createChronicle, analyzeChronicle } from './create-chronicle';
import { hydration } from './hydration';

export function* helloSaga() {
  console.log( 'Running rootSaga!' );
}

export function* rootSaga() {
  yield all([
    helloSaga(),
    createChronicle(),
    analyzeChronicle(),
    hydration()
  ]);
}

const sagaMiddleware = createSagaMiddleware();

export default sagaMiddleware;
