import { connect } from 'react-redux';
import WelcomeComponent from './welcome-component';

import { actions } from 'reducers/glitterhoof/chronicle';

const mapState = state => ({
  chronicleFile: state.glitterhoof.chronicle.file || ''
});

const mapDispatch = (dispatch, props) => ({
  fileChanged: e => dispatch( actions.changeFile( e.target.value ) ),
  dispatchSquires: e => {
    e.preventDefault();

    // File inputs can only have their FileLists set through user action;
    // therefore, they are uncontrolled by React; the following locates the
    // input within the form and snags its first file object to pass to the
    // upload process.
    const form = e.target.closest('form'),
          fileInput = form.querySelector('[type=file]'),
          file = fileInput.files[0];
    dispatch( actions.upload( file ) );
    props.history.push('/status');
  }
});

export default connect( mapState, mapDispatch )( WelcomeComponent );
