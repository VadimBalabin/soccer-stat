import { competitionApi } from '../../utils/api';
import { openNotification } from '../../helpers';

export const COMPETITIONS_SET_DATA = 'COMPETITIONS:SET_DATA';
export const COMPETITIONS_FETCHING = 'COMPETITIONS:FETCHING';
export const COMPETITIONS_LOADED = 'COMPETITIONS:LOADED';

export const competitionsAction = {
  setData: (data) => ({
    type: COMPETITIONS_SET_DATA,
    data
  }),
  fetching: (bool) => ({
    type: COMPETITIONS_FETCHING,
    isFetching: bool
  }),
  loaded: (bool) => ({
    type: COMPETITIONS_LOADED,
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

