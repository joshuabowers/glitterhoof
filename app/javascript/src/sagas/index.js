import createSagaMiddleware from 'redux-saga';
import { put, all } from 'redux-saga/effects'

export function* helloSaga() {
  console.log( 'Running rootSaga!' );
}

export function* rootSaga() {
  yield all([
    helloSaga(),
  ]);
}

const sagaMiddleware = createSagaMiddleware();

export default sagaMiddleware;
