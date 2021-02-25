import { matchApi } from '../../utils/api';
import { openNotification } from '../../helpers';
import { matchesSetData, matchesFetching, matchesLoaded } from '../reducers';

export const matchesAction = {
  list: (resource, code, search) => dispatch => {
    dispatch(matchesFetching({ isFetching: true }));

    matchApi.byResource(resource, code, search).then(({ data }) => {
      dispatch(matchesSetData({ data: data.matches }))
    }).catch((err) => {
      openNotification({
        type: 'error',
        title: 'Failed fetch mathes of ' + resource,
        text: err.response
          ? `${err.response.error}: ${err.response.message}`
          : err.toString()
      });
    }).finally(() => {
      dispatch(matchesLoaded({ loaded: true }))
    })
  },
}
