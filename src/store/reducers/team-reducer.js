import {
  TEAM_SET_DATA,
  TEAM_FETCHING,
  TEAM_LOADED
} from '../actions';

const initialState = {
  isFetching: false,
  loaded: false,
  activeCompetitions: [],
  address: '',
  area: {
    name: ''
  },
  crestUrl: '',
  email: '',
  founded: '',
  name: '',
  phone: '',
  shortName: '',
  squad: [],
  venue: '',
  website: ''
}

export const teamReducer = (state = initialState, payload) => {

  switch (payload.type) {
    case TEAM_SET_DATA: {
      const { activeCompetitions, address, area, crestUrl, email, founded, name, phone, shortName, squad, venue, website } = payload.data;

      return {
        ...state,
        activeCompetitions,
        address,
        area,
        crestUrl,
        email,
        founded,
        name,
        phone,
        shortName,
        squad,
        venue,
        website
      }
    }

    case TEAM_FETCHING: {
      return {
        ...state,
        isFetching: payload.isFetching,
      }
    }

    case TEAM_LOADED: {
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