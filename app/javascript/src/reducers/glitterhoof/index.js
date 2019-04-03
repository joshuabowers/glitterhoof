import { createAction, createReducer } from 'redux-act';
import { combineReducers } from 'redux';

import chronicle, { actions as chronicleActions } from './chronicle';

export const actions = { ...chronicleActions };

export default combineReducers({ chronicle });
