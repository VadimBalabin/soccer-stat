import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';
import { comptetitionsReducer } from './comptetitions-reducer';
import { comptetitionReducer } from './comptetition-reducer';
import { teamsReducer } from './teams-reducer';
import { teamReducer } from './team-reducer';
import { matchesReducer } from './matches-reducer';

const reducers = history => combineReducers({
  // router: connectRouter(history),
  competitions: comptetitionsReducer,
  competition: comptetitionReducer,
  teams: teamsReducer,
  matches: matchesReducer,
  team: teamReducer
});

export default reducers;