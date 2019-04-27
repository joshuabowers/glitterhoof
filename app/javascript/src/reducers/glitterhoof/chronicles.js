import { createAction, createReducer } from 'redux-act';

export const actions = {
    hydrateChronicle: createAction('hydrate individual chronicle'),
    hydrateList: createAction('hydrate chronicles list'),
    hydrateSuccess: createAction('hydrate of app successful'),
    hydrateFailed: createAction('hydrate of app failed'),
}

export default createReducer({
  [actions.hydrateSuccess]: (state, chronicles) => ({
    ...state,
    ...(
      chronicles.reduce( (byId, chronicle) => ({
        ...byId,
        [chronicle.id]: chronicle
      }), {} )
    )
  })
}, {});
