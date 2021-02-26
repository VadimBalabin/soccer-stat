import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fetchingState: 'none',
  errorText: '',
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
        fetchingState: 'success'
      }
    },
    matchesFetching: (state) => {
      return {
        ...state,
        fetchingState: 'loading',
      }
    },
    matchesFetchingError: (state, { payload }) => {
      return {
        ...state,
        fetchingState: 'failed',
        errorText: payload.errorText
      }
    },
  }
});

export const matchesReducer = matcheSlice.reducer;
export const { matchesSetData, matchesFetching, matchesFetchingError } = matcheSlice.actions;