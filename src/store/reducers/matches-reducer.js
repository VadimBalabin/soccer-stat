import {
  MATCHES_SET_DATA,
  MATCHES_FETCHING,
  MATCHES_LOADED
} from '../actions';

const initialState = {
  isFetching: false,
  loaded: false,
  data: [],
}

export const matchesReducer = (state = initialState, payload) => {

  switch (payload.type) {
    case MATCHES_SET_DATA: {
      return {
        ...state,
        data: payload.data,
      }
    }

    case MATCHES_FETCHING: {
      return {
        ...state,
        isFetching: payload.isFetching,
      }
    }

    case MATCHES_LOADED: {
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