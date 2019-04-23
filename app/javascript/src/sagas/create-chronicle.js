import { take, call, put, delay } from 'redux-saga/effects';
import { actions } from 'reducers/glitterhoof/chronicle';
import history from 'utils/history';

// Inspired by: https://github.com/redux-saga/redux-saga/issues/1665#issuecomment-436219304
// Wraps a file read operation in a Promise, which can then be made into
// an effect which saga can consume.
const readAsText = blob => {
  return new Promise( (resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve( reader.result );
    reader.onerror = reject;
    reader.readAsText( blob );
  });
};

function* rpc( action, response ) {
  yield put( action );
  yield take( response );
}

export function* createChronicle() {
  while( true ){
    try {
      console.log( 'Waiting for next upload request' );
      const action = yield take( actions.upload ),
            file = action.payload,
            chunkSize = 1024;
      const fileContents = yield call( readAsText, file );
      console.log( 'Upload request made for file: ', file )

      console.log('Initializing upload request with server...');
      yield call( rpc, actions.startUpload(), actions.beginTransfer );

      for( let i = 0; i <= fileContents.length; i += chunkSize ) {
        const chunk = fileContents.slice( i, i + chunkSize );
        yield call( rpc, actions.transferChunk( chunk ), actions.transferSuccess );
        yield put( actions.uploadProgress( i / fileContents.length ) );
      }

      console.log( 'Finializing upload with server...' );
      yield call( rpc, actions.finalizeUpload(), actions.uploadSuccess );
    } catch( err ){
      yield put( actions.uploadFailure( err ) );
    }
  }
}

export function* analyzeChronicle() {
  while( true ){
    try {
      const action = yield take( actions.processSuccess );
      // TODO: Need to pull /api/chronicles/ for the data for this chronicle,
      // load into redux, then push history.
      history.push( '/chronicles/' + action.payload );
    } catch( err ){
    }
  }
}
