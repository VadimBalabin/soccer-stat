const initialState = {
  isFetching: false,
  loaded: false,
  data: [],
}

export const matchesReducer = (state = initialState, payload) => {

  switch (payload.type) {
    case "MATCHES:SET_DATA": {
      return {
        ...state,
        data: payload.data,
      }
    }

    case "MATCHES:FETCHING": {
      return {
        ...state,
        isFetching: payload.isFetching,
      }
    }

    case "MATCHES:LOADED": {
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