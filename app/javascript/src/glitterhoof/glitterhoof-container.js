import { connect } from 'react-redux';
import GlitterhoofComponent from './glitterhoof-component';

const mapState = state => ({
  isProcessingFile: state.glitterhoof.chronicle.progress !== null
});

const mapDispatch = dispatch => ({

});

export default connect( mapState, mapDispatch )( GlitterhoofComponent );
