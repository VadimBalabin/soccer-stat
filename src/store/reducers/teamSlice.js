import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fetchingState: 'none',
  errorText: '',
  activeCompetitions: [],
  address: '',
  area: {
    name: ''
  },
  crestUrl: '',
  email: '',
  founded: '',
  name: '',
  phone: '',
  shortName: '',
  squad: [],
  venue: '',
  website: ''
}

const teamSlice = createSlice({
  name: 'TEAM',
  initialState,
  reducers: {
    teamSetData: (state, { payload }) => {
      const {
        activeCompetitions,
        address,
        area,
        crestUrl,
        email,
        founded,
        name,
        phone,
        shortName,
        squad,
        venue,
        website
      } = payload.data;

      return {
        ...state,
        activeCompetitions,
        address,
        area,
        crestUrl,
        email,
        founded,
        name,
        phone,
        shortName,
        squad,
        venue,
        website,
        fetchingState: 'success'
      }
    },
    teamFetching: (state) => {
      return {
        ...state,
        fetchingState: 'loading',
      }
    },
    teamFetchingError: (state, { payload }) => {
      return {
        ...state,
        fetchingState: 'failed',
        errorText: payload.errorText
      }
    },
  }
});

export const { teamSetData, teamFetching, teamFetchingError } = teamSlice.actions;
export const teamReducer = teamSlice.reducer;
