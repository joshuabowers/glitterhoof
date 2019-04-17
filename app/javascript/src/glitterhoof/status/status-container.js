import { connect } from 'react-redux';
import StatusComponent from './status-component';

const mapState = state => ({
  step: state.glitterhoof.chronicle.step,
  progress: state.glitterhoof.chronicle.progress
});

const mapDispatch = dispatch => ({

});

export default connect( mapState, mapDispatch )( StatusComponent );
