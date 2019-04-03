import { createAction, createReducer } from 'redux-act';
import { combineReducers } from 'redux';

export const actions = {
  upload: createAction('initiates chronicle file upload'),

  uploadProgress: createAction('Chronicle file upload progress status'),
  uploadSuccess: createAction('Upload of chronicle file has succeeded'),
  uploadFailure: createAction('Upload of chronicle file has failed'),

  processProgress: createAction(''),
  processSuccess: createAction(''),
  processFailure: createAction('')
};

const progress = createReducer({
  [actions.upload]: state => 0,
  [actions.uploadProgress]: (state, { percentComplete }) => percentComplete,
  [actions.processProgress]: (state, { percentComplete }) => percentComplete,
  [actions.uploadSuccess]: state => 100
}, null);

const error = createReducer({
  [actions.uploadFailure]: (state, { error }) => error,
  [actions.processFailure]: (state, { error }) => error,
  [actions.uploadSuccess]: state => null,
  [actions.processSuccess]: state => null
}, null);

export default combineReducers({ progress, error });
