import { createAction, createReducer } from 'redux-act';
import { combineReducers } from 'redux';

import chronicle, { cablecarPrefix, actions as chronicleActions } from './chronicle';

export const actions = { ...chronicleActions };
export { cablecarPrefix };

export default combineReducers({ chronicle });
