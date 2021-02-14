import {
  COMPETITION_SET_DATA,
  COMPETITION_FETCHING,
  COMPETITION_LOADED
} from '../actions';

const initialState = {
  isFetching: false,
  loaded: false,
  name: '',
  code: '',
  area: {
    name: ''
  },
  emblemUrl: '',
  currentSeason: [],
  seasons: [],
  teams: [],
}

export const comptetitionReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case COMPETITION_SET_DATA: {
      const { name, code, area, emblemUrl, currentSeason, seasons } = payload.competition;
      const { teams } = payload.teams

      return {
        ...state,
        name,
        code,
        area,
        emblemUrl,
        currentSeason,
        seasons,
        teams,
      }
    }

    case COMPETITION_FETCHING: {
      return {
        ...state,
        isFetching: payload.isFetching,
      }
    }

    case COMPETITION_LOADED: {
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