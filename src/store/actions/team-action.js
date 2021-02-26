import { teamApi } from '../../utils/api';
import { teamSetData, teamFetching, teamFetchingError } from '../reducers';

export const teamAction = {
  get: (code) => dispatch => {
    dispatch(teamFetching());
    teamApi.get(code).then(({ data }) => {
      dispatch(teamSetData({ data }))
    }).catch((err) => {
      dispatch(teamFetchingError({
        errorText: err.toString() + '. Failed fetch team data'
      }))
    })
  },
}

