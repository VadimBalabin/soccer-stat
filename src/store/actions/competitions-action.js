import { competitionApi } from '../../utils/api';
import { openNotification } from '../../helpers';
import { competitionsFetching, competitionsSetData, competitionsLoaded } from '../reducers/competitionsSlice';

export const competitionsAction = {
  getCompetetionList: () => dispatch => {
    dispatch(competitionsFetching({ isFetching: true }));
    competitionApi.list().then(({ data }) => {
      dispatch(competitionsSetData({ data: data.competitions }));
    }).catch((err) => {
      openNotification({
        type: 'error',
        title: 'Failed fetch the competition list',
        text: err.response
          ? `${err.response.error}: ${err.response.message}`
          : err.toString()
      });
    }).finally(() => {
      dispatch(competitionsLoaded({ loaded: true }))
    })
  }
}

