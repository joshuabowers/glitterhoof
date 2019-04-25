import { createAction, createReducer } from 'redux-act';
import { combineReducers } from 'redux';

import chronicle, { cablecarPrefix, actions as chronicleActions } from './chronicle';
import chronicles, { actions as chroniclesActions } from './chronicles';

export const actions = { ...chronicleActions, ...chroniclesActions };
export { cablecarPrefix };

export default combineReducers({ chronicle, chronicles });
