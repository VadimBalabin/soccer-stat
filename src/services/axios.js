import axios from "axios";

axios.defaults.baseURL = 'https://api.football-data.org/v2';
axios.defaults.headers.common["X-Auth-Token"] = '8967abefd52441eb9965718ea825d40d';

window.axios = axios;

export default axios;