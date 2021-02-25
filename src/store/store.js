import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { comptetitionReducer, comptetitionsReducer, teamReducer, teamsReducer, matchesReducer } from "./reducers";

export default configureStore({
  reducer: {
    competition: comptetitionReducer,
    competitions: comptetitionsReducer,
    team: teamReducer,
    teams: teamsReducer,
    matches: matchesReducer
  },
  middleware: [thunk]
})