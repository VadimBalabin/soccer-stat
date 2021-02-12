import { matchApi } from '../../utils/api';
import { openNotification } from '../../helpers';

export const matchesAction = {
  setData: (data) => ({
    type: "MATCHES:SET_DATA",
    data,
  }),
  fetching: (bool) => ({
    type: "MATCHES:FETCHING",
    isFetching: bool
  }),
  loaded: (bool) => ({
    type: "MATCHES:LOADED",
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
