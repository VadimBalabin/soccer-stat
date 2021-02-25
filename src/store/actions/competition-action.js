import { competitionApi } from '../../utils/api';
import { openNotification } from '../../helpers';
import { competitionSetData, competitionFetching, competitionLoaded } from '../reducers';

export const competitionAction = {
  getContent: (code) => dispatch => {
    dispatch(competitionFetching({ isFetching: true }));
    Promise.all([
      competitionApi.get(code),
      competitionApi.teams(code)
    ]).then(([competition, teams]) => {
      dispatch(competitionSetData({ data: competition.data, teams: teams.data }))
    }).catch((err) => {
      openNotification({
        type: 'error',
        title: 'Failed fetch the competition data',
        text: err.response
          ? `${err.response.error}: ${err.response.message}`
          : err.toString()
      });
    }).finally(() => {
      dispatch(competitionLoaded({ loaded: true }))
    })
  },
}

