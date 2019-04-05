import createSagaMiddleware from 'redux-saga';
import { put, all } from 'redux-saga/effects';

import { createChronicle } from './create-chronicle';

export function* helloSaga() {
  console.log( 'Running rootSaga!' );
}

export function* rootSaga() {
  yield all([
    helloSaga(),
    createChronicle()
  ]);
}

const sagaMiddleware = createSagaMiddleware();

export default sagaMiddleware;
