const initialState = {
  isFetching: false,
  loaded: false,
  data: [],
}

export const teamsReducer = (state = initialState, payload) => {

  switch (payload.type) {
    case "TEAMS:SET_DATA": {
      return {
        ...state,
        data: payload.data,
      }
    }

    case "TEAMS:FETCHING": {
      return {
        ...state,
        isFetching: payload.isFetching,
      }
    }

    case "TEAMS:LOADED": {
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