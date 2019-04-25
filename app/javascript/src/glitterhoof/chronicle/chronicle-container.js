import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import ChronicleComponent from './chronicle-component';

const eventSelector = state => state.glitterhoof.chronicle.events;

const groupedEventSelector = createSelector(
  eventSelector,
  events => {
    if( events === null ){ return {}; }
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

const mapState = state => ({
  dynasty: state.glitterhoof.chronicle.dynasty,
  groups: groupedEventSelector(state)
});

const mapDispatch = dispatch => ({

});

export default connect( mapState, mapDispatch )( ChronicleComponent );
