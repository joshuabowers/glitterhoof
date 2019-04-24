import ActionCable from 'actioncable';

const cable = store => next => action => {
  return next( action );
};

export default cable;
