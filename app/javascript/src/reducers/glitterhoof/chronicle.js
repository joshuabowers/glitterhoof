import { createAction, createReducer } from 'redux-act';
import { combineReducers } from 'redux';

export const cablecarPrefix = 'CHRONICLE_';

const createChannelAction = (actionName) => (
  createAction( cablecarPrefix + actionName.toUpperCase() )
);

export const actions = {
  changeFile: createAction('user selected chronicle file'),

  upload: createAction('initiates chronicle file upload'),

  startUpload: createChannelAction( 'upload_start' ),
  beginTransfer: createChannelAction( 'begin_transfer' ),
  finalizeUpload: createChannelAction( 'upload_finalize' ),

  transferChunk: createChannelAction( 'transfer' ),
  transferSuccess: createChannelAction( 'transfer_success' ),

  uploadProgress: createAction('Chronicle file upload progress status'),
  uploadSuccess: createChannelAction( 'finished_upload' ),
  uploadFailure: createAction('Upload of chronicle file has failed'),

  startProcess: createChannelAction( 'process_start' ),
  processProgress: createChannelAction( 'process_progress' ),
  processSuccess: createChannelAction( 'process_success' ),
  processFailure: createChannelAction( 'process_failure' ),

  hydrate: createAction('hydrate app on page load')
};

const file = createReducer({
  [actions.changeFile]: (state, name) => name,
  [actions.uploadSuccess]: state => null
}, null);

const step = createReducer({
  [actions.upload]: state => 'Upload',
  [actions.startProcess]: state => 'Analyzing file',
  [actions.uploadSuccess]: state => 'Upload success',
  [actions.processSuccess]: state => 'Analysis complete',
  [actions.uploadFailure]: state => 'Failure',
  [actions.processFailure]: state => 'Failure'
}, null);

const progress = createReducer({
  [actions.upload]: state => 0,
  [actions.startProcess]: state => 0,
  [actions.uploadProgress]: (state, percentComplete) => percentComplete,
  [actions.processProgress]: (state, percentComplete) => percentComplete,
  [actions.uploadSuccess]: state => 100,
  [actions.processSuccess]: state => 100
}, null);

const error = createReducer({
  [actions.uploadFailure]: (state, error) => error,
  [actions.processFailure]: (state, error) => error,
  [actions.uploadSuccess]: state => null,
  [actions.processSuccess]: state => null
}, null);

const id = createReducer({
  [actions.processSuccess]: (state, id) => id,
  [actions.hydrate]: (state, id) => id
}, null);

export default combineReducers({ file, step, progress, error, id });
