import axios from 'axios';

const baseURL = 'http://localhost:4000/api';

const api = axios.create({
  baseURL,
});

export default api;