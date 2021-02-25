import { teamApi } from '../../utils/api';
import { openNotification } from '../../helpers';
import { teamsSetData, teamsFetching, teamsLoaded } from '../reducers';

export const teamsAction = {
  getTeamList: () => dispatch => {
    dispatch(teamsFetching({ isFetching: true }));
    teamApi.list().then(({ data }) => {
      dispatch(teamsSetData({ data: data.teams }))
    }).catch((err) => {
      openNotification({
        type: 'error',
        title: 'Failed fetch the competition list',
        text: err.response
          ? `${err.response.error}: ${err.response.message}`
          : err.toString()
      });
    }).finally(() => {
      dispatch(teamsLoaded({ loaded: true }))
    })
  }
}

