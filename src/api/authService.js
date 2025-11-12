import apiClient from './axios';

export const authService = {
  login: async (email, password) => {
    const response = await apiClient.post('/auth/login/dev', {
      email,
      password,
    });
    return response.data;
  },
};