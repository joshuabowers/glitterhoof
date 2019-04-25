import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import ChronicleComponent from './chronicle-component';

const idFrom = location => location && location.pathname.split('/').pop();

const getChronicle = (state, props) => state.glitterhoof.chronicles[idFrom(props.location)] || {};
const getEvents = (state, props) => getChronicle(state, props).events;
const getDynasty = (state, props) => getChronicle(state, props).dynasty;

const makeGetGroupedEvents = () => (
  createSelector(
    getEvents,
    events => {
      if( events === undefined ){ return {}; }
      return events.reduce(
        (grouped, event) => {
          const group = grouped[event.year] || [];
          return {
            ...grouped,
            [event.year]: [...group, event]
          }
        }, {}
      );
    }
  )
)

const makeMapState = () => {
  const getGroupedEvents = makeGetGroupedEvents();
  const mapState = (state, props) => ({
    dynasty: getDynasty( state, props ),
    groups: getGroupedEvents( state, props )
  });
  return mapState;
}

const mapDispatch = dispatch => ({

});

export default connect( makeMapState, mapDispatch )( ChronicleComponent );
