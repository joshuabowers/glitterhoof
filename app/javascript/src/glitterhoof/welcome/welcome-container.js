import { connect } from 'react-redux';
import WelcomeComponent from './welcome-component';

import { actions } from 'reducers/glitterhoof/chronicle';

const mapState = state => ({
  chronicleFile: state.glitterhoof.chronicle.file || ''
});

const mapDispatch = dispatch => ({
  fileChanged: (e) => dispatch( actions.changeFile( e.target.value ) )
});

export default connect( mapState, mapDispatch )( WelcomeComponent );
