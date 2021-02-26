import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fetchingState: 'none',
  errorText: '',
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
        fetchingState: 'success'
      }
    },
    competitionFetching: (state) => {
      return {
        ...state,
        fetchingState: 'loading',
      }
    },
    competitionFetchingError: (state, { payload }) => {
      return {
        ...state,
        fetchingState: 'failed',
        errorText: payload.errorText
      }
    }
  }
});

export const { competitionSetData, competitionFetching, competitionFetchingError } = competitionSlice.actions;
export const comptetitionReducer = competitionSlice.reducer;
