import { competitionApi } from '../../utils/api';
import { openNotification } from '../../helpers';

export const competitionsAction = {
  setData: (data) => ({
    type: "COMPETITIONS:SET_DATA",
    data
  }),
  fetching: (bool) => ({
    type: "COMPETITIONS:FETCHING",
    isFetching: bool
  }),
  loaded: (bool) => ({
    type: "COMPETITIONS:LOADED",
    loaded: bool
  }),

  getCompetetionList: () => dispatch => {
    dispatch(competitionsAction.fetching(true));
    competitionApi.list().then(({ data }) => {
      dispatch(competitionsAction.setData(data.competitions))
    }).catch((err) => {
      openNotification({
        type: 'error',
        title: 'Failed fetch the competition list',
        text: err.response
          ? `${err.response.error}: ${err.response.message}`
          : err.toString()
      });
    }).finally(() => {
      dispatch(competitionsAction.loaded(true))
    })
  }
}

