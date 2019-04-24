import ActionCable from 'actioncable';

const cable = store => {
  let consumer = null, subscription = null, options = {}, prefix = 'RAILS_',
      isPrefix = null;

  cable.connect = (channel, { cableParams = {}, ...config }) => {
    options = config;
    const params = { channel: channel, ...cableParams };
    prefix = options.prefix || prefix;
    isPrefix = new RegExp( `^${ prefix }` );

    consumer = ActionCable.createConsumer( config.url );
    subscription = consumer.subscriptions.create( params, {
      initialized: () => {
        store.dispatch( { type: 'CABLE_INITIALIZED' } );
      },
      connected: () => {
        store.dispatch( { type: 'CABLE_CONNECTED' } );
      },
      disconnected: () => {
        store.dispatch( { type: 'CABLE_DISCONNECTED' } );
      },
      received: (message) => {
        store.dispatch( message );
      },
      rejected: () => {
        throw new Error('redux-actioncable: connection rejected');
      }
    } );
  };

  return next => action => {
    const { type } = action;

    if( type.match( isPrefix ) ){
      subscription.send( action );
      return store.getState();
    } else {
      return next( action );
    }
  };
};

export default cable;
