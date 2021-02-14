import {
  TEAMS_SET_DATA,
  TEAMS_FETCHING,
  TEAMS_LOADED
} from '../actions';

const initialState = {
  isFetching: false,
  loaded: false,
  data: [],
}

export const teamsReducer = (state = initialState, payload) => {

  switch (payload.type) {
    case TEAMS_SET_DATA: {
      return {
        ...state,
        data: payload.data,
      }
    }

    case TEAMS_FETCHING: {
      return {
        ...state,
        isFetching: payload.isFetching,
      }
    }

    case TEAMS_LOADED: {
      return {
        ...state,
        isFetching: false,
        loaded: payload.loaded,
      }
    }

    default:
      return state
  }
}