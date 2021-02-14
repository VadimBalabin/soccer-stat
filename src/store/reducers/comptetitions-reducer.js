import {
  COMPETITIONS_SET_DATA,
  COMPETITIONS_FETCHING,
  COMPETITIONS_LOADED
} from '../actions';

const initialState = {
  isFetching: false,
  loaded: false,
  data: [],
}

export const comptetitionsReducer = (state = initialState, payload) => {

  switch (payload.type) {
    case COMPETITIONS_SET_DATA: {
      return {
        ...state,
        data: payload.data,
      }
    }

    case COMPETITIONS_FETCHING: {
      return {
        ...state,
        isFetching: payload.isFetching,
      }
    }

    case COMPETITIONS_LOADED: {
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