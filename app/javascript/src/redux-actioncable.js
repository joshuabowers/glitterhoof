import ActionCable from 'actioncable';

const cable = store => {
  let consumer = null, subscription = null, options = {};

  cable.connect = (channel, { cableParams = {}, ...config }) => {
    options = config;
    const params = { channel: channel, ...cableParams };

    consumer = ActionCable.createConsumer( config.url );
    subscription = consumer.subscriptions.create( params, {
      initialized: () => {
        store.dispatch( { type: 'CABLE_INITIALIZED' } );
      },
      connected: () => {
        store.dispatch( { type: 'CABLE_CONNECTED' } );
      },
      disconnected: () => {

      },
      received: (message) => {
        store.dispatch( message );
      },
      rejected: () => {

      }
    } );
  };

  return next => action => {
    return next( action );
  };
};

export default cable;
