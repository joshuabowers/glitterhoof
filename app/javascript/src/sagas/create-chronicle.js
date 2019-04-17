import { take, call, put, delay } from 'redux-saga/effects';
import { actions } from 'reducers/glitterhoof/chronicle';

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

export function* createChronicle() {
  while( true ){
    try {
      const action = yield take( actions.upload ),
            file = action.payload,
            chunkSize = 1024;
      const fileContents = yield call( readAsText, file );
      for( let i = 0; i <= fileContents.length; i += chunkSize ) {
        const chunk = fileContents.slice( i, i + chunkSize );
        yield put( actions.transferChunk( chunk ) );
        yield delay( 50 );

        // yield take( actions.transferSuccess );
        yield put( actions.uploadProgress( i / fileContents.length ) );
      }
    } catch( err ){
      yield put( actions.uploadFailure( err ) );
    }
  }
}
