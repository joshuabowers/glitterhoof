import { combineReducers } from 'redux';
import { createAction } from 'redux-act';
import glitterhoof, { cablecarPrefix } from './glitterhoof';

export const actions = {
  historyChanged: createAction(
    'browserHistory location changed',
    ( location, action ) => ({ location, action })
  )
}

export { cablecarPrefix };
export default combineReducers({ glitterhoof });
