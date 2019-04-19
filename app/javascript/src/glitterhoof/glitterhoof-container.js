import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import GlitterhoofComponent from './glitterhoof-component';

const mapState = state => ({
});

const mapDispatch = dispatch => ({

});

export default connect( mapState, mapDispatch )(
  withRouter( GlitterhoofComponent )
);
