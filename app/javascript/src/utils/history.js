import { createBrowserHistory } from 'history';
import { actions } from 'reducers';

const history = createBrowserHistory();

export const historyChangedMiddleware = store => {
  history.listen( (location, historyAction) => {
    store.dispatch( actions.historyChanged( location, historyAction ) )
  } );
  return next => action => next( action );
}

export default history;
