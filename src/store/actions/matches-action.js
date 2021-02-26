import { matchApi } from '../../utils/api';
import { matchesSetData, matchesFetching, matchesFetchingError } from '../reducers';

export const matchesAction = {
  list: (resource, code, search) => dispatch => {
    dispatch(matchesFetching({ isFetching: true }));

    matchApi.byResource(resource, code, search).then(({ data }) => {
      dispatch(matchesSetData({ data: data.matches }))
    }).catch((err) => {
      dispatch(matchesFetchingError({
        errorText: 'Failed fetch mathes of ' + resource + ' ' + err.response
          ? `${err.response.error}: ${err.response.message}`
          : err.toString()
      }))
    })
  },
}
