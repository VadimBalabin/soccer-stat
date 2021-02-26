import { competitionApi } from '../../utils/api';
import { competitionSetData, competitionFetching, competitionFetchingError } from '../reducers';

export const competitionAction = {
  getContent: (code) => dispatch => {
    dispatch(competitionFetching());
    Promise.all([
      competitionApi.get(code),
      competitionApi.teams(code)
    ]).then(([competition, teams]) => {
      dispatch(competitionSetData({ data: competition.data, teams: teams.data }))
    }).catch((err) => {
      dispatch(competitionFetchingError({
        errorText: err.toString() + '. Failed fetch competition data'
      }))
    })
  },
}

