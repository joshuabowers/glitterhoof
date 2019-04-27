import { all, take, call, put, select } from 'redux-saga/effects';
import { actions } from 'reducers/glitterhoof';
import { actions as historyActions } from 'reducers';

const getChronicle = (state, id) => state.glitterhoof.chronicles[id];

export function* hydrateOnHistoryChange() {
  while( true ){
    const action = yield take( historyActions.historyChanged ),
          { location } = action.payload;

    console.log( 'location changed to:', location );

    const isChronicles = location.pathname.match( /\/chronicles(?:\/(\w+))?/);
    if( isChronicles !== null ){
      const id = isChronicles[1];
      if( id !== undefined ){
        yield put( actions.hydrateChronicle( id ) );
      } else {
        yield put( actions.hydrateList() );
      }
    }
  }
}

// Fetches data associated with a given chronicle id from the server and
// updates the redux store with that data.
export function* hydrateChronicle(){
  while( true ){
    const action = yield take([ actions.processSuccess, actions.hydrateChronicle ]),
          id = action.payload;

    console.log( 'hydrateChronicle:', action );

    try {
      // Check to see if we already have the events for this chronicle;
      // no sense wasting bandwidth and time refetching.
      const chronicle = yield select( getChronicle, id );
      if( chronicle && chronicle.events && chronicle.events.length > 0 ){ continue; }

      const result = yield call( fetch, `/api/chronicles/${ id }` );
      const data = yield result.json();

      // Possibly need to break this up into a series of actions, as
      // the app chugs on dumping all events at once.
      yield put( actions.hydrateSuccess( [data] ) );
    } catch( e ) {
      yield put( actions.hydrateFailed( e ) );
    }
  }
}

export function* hydrateList() {
  while( true ){
    const action = yield take( actions.hydrateList );

    console.log( 'hydrateList:', action );

    try {
      const result = yield call( fetch, '/api/chronicles' );
      const data = yield result.json();

      yield put( actions.hydrateSuccess( data ) );
    } catch( e ) {
      yield put( actions.hydrateFailed( e ) );
    }
  }
}

export function* hydration() {
  yield all([
    hydrateChronicle(),
    hydrateList(),
    hydrateOnHistoryChange()
  ]);
}
