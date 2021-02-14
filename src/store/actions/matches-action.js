import { matchApi } from '../../utils/api';
import { openNotification } from '../../helpers';

export const MATCHES_SET_DATA = 'MATCHES:SET_DATA';
export const MATCHES_FETCHING = 'MATCHES:FETCHING';
export const MATCHES_LOADED = 'MATCHES:LOADED';

export const matchesAction = {
  setData: (data) => ({
    type: MATCHES_SET_DATA,
    data,
  }),
  fetching: (bool) => ({
    type: MATCHES_FETCHING,
    isFetching: bool
  }),
  loaded: (bool) => ({
    type: MATCHES_LOADED,
    loaded: bool
  }),

  list: (resource, code, search) => dispatch => {
    dispatch(matchesAction.fetching(true));

    matchApi.byResource(resource, code, search).then(({ data }) => {
      dispatch(matchesAction.setData(data.matches))
    }).catch((err) => {
      openNotification({
        type: 'error',
        title: 'Failed fetch mathes of ' + resource,
        text: err.response
          ? `${err.response.error}: ${err.response.message}`
          : err.toString()
      });
    }).finally(() => {
      dispatch(matchesAction.loaded(true))
    })
  },
}
