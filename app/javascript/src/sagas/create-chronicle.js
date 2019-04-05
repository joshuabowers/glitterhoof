import { take, call, put } from 'redux-saga/effects';
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
            file = action.payload;
      const fileContents = yield call( readAsText, file );
      yield put( actions.uploadProgress( 0 ) );
    } catch( err ){
      yield put( actions.uploadFailure( err ) );
    }
  }
}
