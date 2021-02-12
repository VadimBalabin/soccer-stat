import { competitionApi } from '../../utils/api';
import { openNotification } from '../../helpers';

export const competitionAction = {
  setData: (competition, teams) => ({
    type: "COMPETITION:SET_DATA",
    competition,
    teams
  }),
  fetching: (bool) => ({
    type: "COMPETITION:FETCHING",
    isFetching: bool
  }),
  loaded: (bool) => ({
    type: "COMPETITION:LOADED",
    loaded: bool
  }),

  get: (code) => dispatch => {
    dispatch(competitionAction.fetching(true));
    competitionApi.get(code).then(({ data }) => {
      dispatch(competitionAction.setData(data))
    }).catch((err) => {
      openNotification({
        type: 'error',
        title: 'Failed fetch the competition',
        text: err.response
          ? `${err.response.error}: ${err.response.message}`
          : err.toString()
      });
    }).finally(() => {
      dispatch(competitionAction.loaded(true))
    })
  },

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

