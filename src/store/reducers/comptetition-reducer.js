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
    case "COMPETITION:SET_DATA": {
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

    case "COMPETITION:FETCHING": {
      return {
        ...state,
        isFetching: payload.isFetching,
      }
    }

    case "COMPETITION:LOADED": {
      return {
        ...state,
        isFetching: false,
        loaded: payload.loaded,
      }
    }

    case "COMPETITION:SET_TEAMS": {
      return {
        ...state,
        teams: payload.teams
      }
    }

    default:
      return state
  }
}