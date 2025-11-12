import axios from 'axios';
import { store } from '../store/store';

const apiClient = axios.create({
  baseURL: 'https://api-dev.docnova.ai',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.token;
    
    if (token) {
      config.headers['R-Auth'] = token;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;