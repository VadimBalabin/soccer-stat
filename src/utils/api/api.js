import { axios } from '../../services';

export const competitionApi = {
  list: () => axios.get('/competitions?plan=TIER_ONE'),
  get: (id) => axios.get('/competitions/' + id),
  teams: (id) => axios.get(`/competitions/${id}/teams`),
  matches: (code, filter = '') => axios.get(`/competitions/${code}/matches${filter}`),
}

export const teamApi = {
  get: (id) => axios.get('/teams/' + id),
  list: () => axios.get('/teams'),
}

export const matchApi = {
  list: () => axios.get('/matches'),
  get: (id) => axios.get('/matches/' + id),
  byResource: (resource, id, filter = '') => axios.get(`/${resource}/${id}/matches${filter}`),
}