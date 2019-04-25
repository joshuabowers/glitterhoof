import { connect } from 'react-redux';
import ChronicleComponent from './chronicle-component';

const mapState = state => ({
  dynasty: state.glitterhoof.chronicle.dynasty,
  events: state.glitterhoof.chronicle.events
});

const mapDispatch = dispatch => ({

});

export default connect( mapState, mapDispatch )( ChronicleComponent );
