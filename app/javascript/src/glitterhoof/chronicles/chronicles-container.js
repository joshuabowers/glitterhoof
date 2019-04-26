import { connect } from 'react-redux';
import ChroniclesComponent from './chronicles-component';
import { actions } from 'reducers/glitterhoof';

const mapState = state => ({
  chronicles: Object.values( state.glitterhoof.chronicles )
});

const mapDispatch = dispatch => ({
  // loadChronicle: e => dispatch( actions.hydrate( e.target.id ) )
  loadChronicle: e => {
    console.log( e, e.target, e.target.id );
    dispatch( actions.hydrate( e.target.id ) );
    return true;
  }
});

export default connect( mapState, mapDispatch )( ChroniclesComponent );
