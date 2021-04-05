import axios from 'axios';

const baseUrl = process.env.development.local.REACT_APP_RAILS_KEY === 'production' ? 'where our deploy link goes' : 'http://localhost:3000';

const api = axios.create({
  baseURL: baseUrl
});

export default api;