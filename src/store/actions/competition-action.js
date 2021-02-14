import { competitionApi } from '../../utils/api';
import { openNotification } from '../../helpers';

export const COMPETITION_SET_DATA = 'COMPETITION:SET_DATA';
export const COMPETITION_FETCHING = 'COMPETITION:FETCHING';
export const COMPETITION_LOADED = 'COMPETITION:LOADED';

export const competitionAction = {
  setData: (competition, teams) => ({
    type: COMPETITION_SET_DATA,
    competition,
    teams
  }),
  fetching: (bool) => ({
    type: COMPETITION_FETCHING,
    isFetching: bool
  }),
  loaded: (bool) => ({
    type: COMPETITION_LOADED,
    loaded: bool
  }),

  getContent: (code) => dispatch => {
    dispatch(competitionAction.fetching(true));
    Promise.all([
      competitionApi.get(code),
      competitionApi.teams(code)
    ]).then(([competition, teams]) => {
      dispatch(competitionAction.setData(competition.data, teams.data))
    }).catch((err) => {
      openNotification({
        type: 'error',
        title: 'Failed fetch the competition data',
        text: err.response
          ? `${err.response.error}: ${err.response.message}`
          : err.toString()
      });
    }).finally(() => {
      dispatch(competitionAction.loaded(true))
    })
  },
}

