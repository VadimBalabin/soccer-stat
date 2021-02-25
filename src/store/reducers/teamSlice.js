import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFetching: false,
  loaded: false,
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
      const { activeCompetitions, address, area, crestUrl, email, founded, name, phone, shortName, squad, venue, website } = payload.data;

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
        website
      }
    },
    teamFetching: (state, { payload }) => {
      return {
        ...state,
        isFetching: payload.isFetching,
      }
    },
    teamLoaded: (state, { payload }) => {
      return {
        ...state,
        isFetching: false,
        loaded: payload.loaded,
      }
    }
  }
});

export const { teamSetData, teamFetching, teamLoaded } = teamSlice.actions;
export const teamReducer = teamSlice.reducer;
