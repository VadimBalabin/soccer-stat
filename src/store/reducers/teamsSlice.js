import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFetching: false,
  loaded: false,
  data: [],
}

const teamsSlice = createSlice({
  name: 'TEAMS',
  initialState,
  reducers: {
    teamsSetData: (state, { payload }) => {
      return {
        ...state,
        data: payload.data,
      }
    },
    teamsFetching: (state, { payload }) => {
      return {
        ...state,
        isFetching: payload.isFetching,
      }
    },
    teamsLoaded: (state, { payload }) => {
      return {
        ...state,
        isFetching: false,
        loaded: payload.loaded,
      }
    },
  }
});

export const { teamsSetData, teamsFetching, teamsLoaded } = teamsSlice.actions;
export const teamsReducer = teamsSlice.reducer;