const initialState = {
  isFetching: false,
  loaded: false,
  data: [],
}

export const comptetitionsReducer = (state = initialState, payload) => {

  switch (payload.type) {
    case "COMPETITIONS:SET_DATA": {
      return {
        ...state,
        data: payload.data,
      }
    }

    case "COMPETITIONS:FETCHING": {
      return {
        ...state,
        isFetching: payload.isFetching,
      }
    }

    case "COMPETITIONS:LOADED": {
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