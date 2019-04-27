import { connect } from 'react-redux';
import ChroniclesComponent from './chronicles-component';
import { actions } from 'reducers/glitterhoof';

const mapState = state => ({
  chronicles: Object.values( state.glitterhoof.chronicles )
});

const mapDispatch = dispatch => ({
});

export default connect( mapState, mapDispatch )( ChroniclesComponent );
