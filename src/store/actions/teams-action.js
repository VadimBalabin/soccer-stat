import { teamApi } from '../../utils/api';
import { openNotification } from '../../helpers';

export const teamsAction = {
  setData: (data) => ({
    type: "TEAMS:SET_DATA",
    data
  }),
  fetching: (bool) => ({
    type: "TEAMS:FETCHING",
    isFetching: bool
  }),
  loaded: (bool) => ({
    type: "TEAMS:LOADED",
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

