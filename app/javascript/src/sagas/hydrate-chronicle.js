import { take, call, put, delay } from 'redux-saga/effects';
import history from 'utils/history';
import { actions } from 'reducers/glitterhoof/chronicle';

// Fetches data associated with a given chronicle id from the server and
// updates the redux store with that data.
export function* hydrateChronicle(){
  while( true ){
    const action = yield take([ actions.processSuccess, actions.hydrate ]),
          id = action.payload;

    try {
      const result = yield call( fetch, `/api/chronicles/${ id }` );
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
  }
}
