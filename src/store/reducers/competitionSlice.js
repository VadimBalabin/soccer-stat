import { createSlice } from '@reduxjs/toolkit';

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

const competitionSlice = createSlice({
  name: 'COMPETITION',
  initialState,
  reducers: {
    competitionSetData: (state, { payload }) => {
      const { name, code, area, emblemUrl, currentSeason, seasons } = payload.data;
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
    },
    competitionFetching: (state, { payload }) => {
      return {
        ...state,
        isFetching: payload.isFetching,
      }
    },
    competitionLoaded: (state, { payload }) => {
      return {
        ...state,
        isFetching: false,
        loaded: payload.loaded
      }
    }
  }
});

export const { competitionSetData, competitionFetching, competitionLoaded } = competitionSlice.actions;
export const comptetitionReducer = competitionSlice.reducer;
