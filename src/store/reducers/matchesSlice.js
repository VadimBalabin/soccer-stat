import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFetching: false,
  loaded: false,
  data: [],
}

const matcheSlice = createSlice({
  name: 'MATCHES',
  initialState,
  reducers: {
    matchesSetData: (state, { payload }) => {
      return {
        ...state,
        data: payload.data,
      }
    },
    matchesFetching: (state, { payload }) => {
      return {
        ...state,
        isFetching: payload.isFetching,
      }
    },
    matchesLoaded: (state, { payload }) => {
      return {
        ...state,
        isFetching: false,
        loaded: payload.loaded,
      }
    },
  }
});

export const matchesReducer = matcheSlice.reducer;
export const { matchesSetData, matchesFetching, matchesLoaded } = matcheSlice.actions;