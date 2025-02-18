// services/authService.js
import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/identity`;

const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data; // Assuming the API returns { token, user }
};

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data; // Assuming the API returns { token, user }
};

const refreshToken = async () => {
  const response = await axios.post(`${API_URL}/refresh`, {
    refreshToken: localStorage.getItem('refreshToken'),
  });
  return response.data; // Assuming the API returns a new token
};

const logout = async () => {
  const response = await axios.post(`${API_URL}/logout`, {
    token: localStorage.getItem('token'),
  });
  return response.data;
};

export default {
  login,
  register,
  refreshToken,
  logout,
};
