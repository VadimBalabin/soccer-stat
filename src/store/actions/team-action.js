import { teamApi } from '../../utils/api';
import { openNotification } from '../../helpers';

export const TEAM_SET_DATA = 'TEAM:SET_DATA';
export const TEAM_FETCHING = 'TEAM:FETCHING';
export const TEAM_LOADED = 'TEAM:LOADED';

export const teamAction = {
  setData: (data) => ({
    type: TEAM_SET_DATA,
    data
  }),
  fetching: (bool) => ({
    type: TEAM_FETCHING,
    isFetching: bool
  }),
  loaded: (bool) => ({
    type: TEAM_LOADED,
    loaded: bool
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
}

