import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFetching: false,
  loaded: false,
  data: [],
}

const competitionsSlice = createSlice({
  name: 'COMPETITIONS',
  initialState,
  reducers: {
    competitionsFetching: (state, { payload }) => {
      return {
        ...state,
        isFetching: payload.isFetching
      }
    },
    competitionsSetData: (state, { payload }) => {
      return {
        ...state,
        loaded: true,
        data: payload.data
      }
    },
    competitionsLoaded: (state, { payload }) => {
      return {
        ...state,
        isFetching: false,
        loaded: payload.loaded,
      }
    }
  }
})

export const { competitionsFetching, competitionsSetData, competitionsLoaded } = competitionsSlice.actions;
export const comptetitionsReducer = competitionsSlice.reducer;
