import { createAction, createReducer } from 'redux-act';
import { combineReducers } from 'redux';

export const actions = {
  changeFile: createAction('user selected chronicle file'),

  upload: createAction('initiates chronicle file upload'),

  transferChunk: createAction('transfers a file chunk to the server'),
  transferSuccess: createAction('file chunk transfer sucessful'),

  uploadProgress: createAction('Chronicle file upload progress status'),
  uploadSuccess: createAction('Upload of chronicle file has succeeded'),
  uploadFailure: createAction('Upload of chronicle file has failed'),

  processProgress: createAction(''),
  processSuccess: createAction(''),
  processFailure: createAction('')
};

const file = createReducer({
  [actions.changeFile]: (state, name) => name,
  [actions.uploadSuccess]: state => null
}, null);

const step = createReducer({
  [actions.upload]: state => 'Upload',
  [actions.processProgress]: state => 'Analyzing file',
  [actions.uploadSuccess]: state => 'Upload success',
  [actions.processSuccess]: state => 'Analysis complete',
  [actions.uploadFailure]: state => 'Failure',
  [actions.processFailure]: state => 'Failure'
}, null);

const progress = createReducer({
  [actions.upload]: state => 0,
  [actions.uploadProgress]: (state, percentComplete) => percentComplete,
  [actions.processProgress]: (state, percentComplete) => percentComplete,
  [actions.uploadSuccess]: state => 100
}, null);

const error = createReducer({
  [actions.uploadFailure]: (state, error) => error,
  [actions.processFailure]: (state, error) => error,
  [actions.uploadSuccess]: state => null,
  [actions.processSuccess]: state => null
}, null);

export default combineReducers({ file, step, progress, error });
