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
    case "TEAM:SET_DATA": {
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

    case "TEAM:FETCHING": {
      return {
        ...state,
        isFetching: payload.isFetching,
      }
    }

    case "TEAM:LOADED": {
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