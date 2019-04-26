import { take, call, put, delay, select } from 'redux-saga/effects';
import history from 'utils/history';
import { actions } from 'reducers/glitterhoof';

const getChronicle = (state, id) => state.glitterhoof.chronicles[id];

// Fetches data associated with a given chronicle id from the server and
// updates the redux store with that data.
export function* hydrateChronicle(){
  while( true ){
    const action = yield take([ actions.processSuccess, actions.hydrate ]),
          id = action.payload;

    console.log( 'hydrateChronicle:', action );

    // We are only interested in hydration events which target a specific
    // chronicle.
    if( id === undefined || id === '' ){ continue; }

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

export function* hydrateChronicles() {
  while( true ){
    const action = yield take( actions.hydrate );

    console.log( 'hydrateChronicle:', action );

    // We are only interested in hydration events which aren't specifically
    // targetting a chronicle.
    if( action.payload !== undefined ){ continue; }

    try {
      const result = yield call( fetch, '/api/chronicles' );
      const data = yield result.json();

      yield put( actions.hydrateSuccess( data ) );
    } catch( e ) {
      yield put( actions.hydrateFailed( e ) );
    }
  }
}

// Bootstraps app by grabbing an id associated with the current URL on page
// load.
export function* hydrate(){
  const location = history.location;
  const id = location.pathname.match( /^\/chronicles\/(\w+)$/ );
  if( id !== null ){
    yield put( actions.hydrate( id[1] ) );
  } else if( location.pathname.match( /^\/chronicles/ ) ) {
    yield put( actions.hydrate() );
  }
}
