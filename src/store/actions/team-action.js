import { teamApi } from '../../utils/api';
import { openNotification } from '../../helpers';
import { teamSetData, teamFetching, teamLoaded } from '../reducers';

export const teamAction = {
  get: (code) => dispatch => {
    dispatch(teamFetching({isFetching: true}));
    teamApi.get(code).then(({ data }) => {
      dispatch(teamSetData({ data }))
    }).catch((err) => {
      openNotification({
        type: 'error',
        title: 'Failed fetch the team data',
        text: err.response
          ? `${err.response.error}: ${err.response.message}`
          : err.toString()
      });
    }).finally(() => {
      dispatch(teamLoaded({ loaded: true }))
    })
  },
}

