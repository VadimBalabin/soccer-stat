import { teamApi } from '../../utils/api';
import { openNotification } from '../../helpers';

export const teamAction = {
  setData: (data) => ({
    type: "TEAM:SET_DATA",
    data
  }),
  fetching: (bool) => ({
    type: "TEAM:FETCHING",
    isFetching: bool
  }),
  loaded: (bool) => ({
    type: "TEAM:LOADED",
    loaded: bool
  }),
  setMatches: (matches) => ({
    type: "TEAM:SET_MATCHES",
    matches
  }),

  get: (code) => dispatch => {
    dispatch(teamAction.fetching(true));
    teamApi.get(code).then(({ data }) => {
      dispatch(teamAction.setData(data))
    }).catch((err) => {
      openNotification({
        type: 'error',
        title: 'Failed fetch the team data',
        text: err.response
          ? `${err.response.error}: ${err.response.message}`
          : err.toString()
      });
    }).finally(() => {
      dispatch(teamAction.loaded(true))
    })
  },

  // getContent: (code) => dispatch => {
  //   dispatch(teamAction.fetching(true));
  //   Promise.all([
  //     competitionApi.get(code),
  //     competitionApi.teams(code)
  //   ]).then(([competition, teams]) => {
  //     dispatch(teamAction.setData(competition.data, teams.data))
  //   }).catch((err) => {
  //     openNotification({
  //       type: 'error',
  //       title: 'Failed fetch the competition data',
  //       text: err.response
  //         ? `${err.response.error}: ${err.response.message}`
  //         : err.toString()
  //     });
  //   }).finally(() => {
  //     dispatch(teamAction.loaded(true))
  //   })
  // },
}

