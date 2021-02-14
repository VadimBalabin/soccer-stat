import { teamApi } from '../../utils/api';
import { openNotification } from '../../helpers';

export const TEAMS_SET_DATA = 'TEAMS:SET_DATA';
export const TEAMS_FETCHING = 'TEAMS:FETCHING';
export const TEAMS_LOADED = 'TEAMS:LOADED';

export const teamsAction = {
  setData: (data) => ({
    type: TEAMS_SET_DATA,
    data
  }),
  fetching: (bool) => ({
    type: TEAMS_FETCHING,
    isFetching: bool
  }),
  loaded: (bool) => ({
    type: TEAMS_LOADED,
    loaded: bool
  }),

  getTeamList: () => dispatch => {
    dispatch(teamsAction.fetching(true));
    teamApi.list().then(({ data }) => {
      dispatch(teamsAction.setData(data.teams))
    }).catch((err) => {
      openNotification({
        type: 'error',
        title: 'Failed fetch the competition list',
        text: err.response
          ? `${err.response.error}: ${err.response.message}`
          : err.toString()
      });
    }).finally(() => {
      dispatch(teamsAction.loaded(true))
    })
  }
}

